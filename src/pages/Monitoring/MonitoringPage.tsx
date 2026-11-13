import {
	Alert,
	Box,
	Card,
	CardContent,
	Grid,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import {
	MemoryRounded,
	SpeedRounded,
	StorageRounded,
	ThermostatRounded,
} from "@mui/icons-material";
import PageHeader from "../../components/common/PageHeader";
import { useMemo, useState } from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import {
	useServerMetricHistory,
	useNetworkMetricHistory,
	useMonitoring,
} from "../../hooks/useMonitoring";

const formatBytes = (bytes: number | null | undefined): string => {
	if (bytes == null) return "--";
	return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
};

// Add this new function below formatBytes
const formatNetworkSpeed = (
	bytesPerSecond: number | null | undefined,
): string => {
	if (bytesPerSecond == null) return "--";

	const mbps = (bytesPerSecond * 8) / 1_000_000;
	return `${mbps.toFixed(2)} Mbps`;
};

const getPercentage = (
	used: number | null | undefined,
	total: number | null | undefined,
): number | null => {
	if (used == null || total == null || total <= 0) return null;
	return (used / total) * 100;
};

type HealthStatus = "healthy" | "warning" | "critical" | "unknown";

const getHealthStatus = (
	value: number | null | undefined,
	warningThreshold: number,
	criticalThreshold: number,
): HealthStatus => {
	if (value == null) return "unknown";
	if (value >= criticalThreshold) return "critical";
	if (value >= warningThreshold) return "warning";
	return "healthy";
};

const getLatencyStatus = (
	latency: number | null,
	targetName: string,
): HealthStatus => {
	if (latency == null) return "unknown";

	const isRouter = targetName.toLowerCase() === "router";

	return getHealthStatus(latency, isRouter ? 20 : 50, isRouter ? 100 : 150);
};

const getPacketLossStatus = (packetLoss: number | null): HealthStatus => {
	if (packetLoss == null) return "unknown";
	if (packetLoss > 2) return "critical";
	if (packetLoss > 0) return "warning";
	return "healthy";
};

const healthStyles = {
	healthy: {
		background: "#17372D",
		border: "#287A52",
		color: "#4ADE80",
		label: "Healthy",
	},
	warning: {
		background: "#3D301B",
		border: "#A87926",
		color: "#FBBF24",
		label: "Warning",
	},
	critical: {
		background: "#3D2026",
		border: "#A94350",
		color: "#F87171",
		label: "Critical",
	},
	unknown: {
		background: "#252D3B",
		border: "#465164",
		color: "#AAB4C3",
		label: "Unavailable",
	},
};

interface MetricCardProps {
	title: string;
	value: string;
	subtitle: string;
	icon: React.ReactNode;
	loading?: boolean;
	status: HealthStatus;
}

const MetricCard = ({
	title,
	value,
	subtitle,
	icon,
	loading,
	status,
}: MetricCardProps) => {
	const colors = healthStyles[status];

	return (
		<Card
			variant="outlined"
			sx={{
				height: "100%",
				borderRadius: 3,
				backgroundColor: "background.paper",
			}}
		>
			<CardContent>
				<Stack direction="row" justifyContent="space-between">
					<Typography color="text.secondary" variant="body2">
						{title}
					</Typography>
					<Box sx={{ color: colors.color, display: "flex" }}>{icon}</Box>
				</Stack>

				{loading ? (
					<Skeleton width="65%" height={48} />
				) : (
					<Typography
						variant="h4"
						fontWeight={700}
						sx={{ mt: 2, color: colors.color }}
					>
						{value}
					</Typography>
				)}

				<Typography variant="caption" color="text.secondary">
					{subtitle}
				</Typography>
			</CardContent>
		</Card>
	);
};

type HistoryRange = "1h" | "6h" | "24h";

const RANGE_IN_MS: Record<HistoryRange, number> = {
	"1h": 60 * 60 * 1000,
	"6h": 6 * 60 * 60 * 1000,
	"24h": 24 * 60 * 60 * 1000,
};

const formatChartTime = (date: string) =>
	new Date(date).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

const formatPercentage = (used: number | null, total: number | null) => {
	if (used == null || total == null || total <= 0) return null;
	return Number(((used / total) * 100).toFixed(2));
};

const formatMbps = (bytesPerSecond: number | null) => {
	if (bytesPerSecond == null) return null;
	return Number(((bytesPerSecond * 8) / 1_000_000).toFixed(3));
};

const MonitoringPage = () => {
	const { data, isLoading, isError, error } = useMonitoring();
	const [historyRange, setHistoryRange] = useState<HistoryRange>("1h");

	const { data: serverHistory = [], isLoading: serverHistoryLoading } =
		useServerMetricHistory();

	const { data: networkHistory = [], isLoading: networkHistoryLoading } =
		useNetworkMetricHistory("wlp3s0");

	const cutoff = Date.now() - RANGE_IN_MS[historyRange];

	const serverChartData = useMemo(() => {
		return serverHistory
			.filter((item) => new Date(item.createdAt).getTime() >= cutoff)
			.map((item) => ({
				time: formatChartTime(item.createdAt),
				timestamp: new Date(item.createdAt).getTime(),
				cpu: item.cpuUsagePercent,
				memory: formatPercentage(item.usedMemoryBytes, item.totalMemoryBytes),
			}))
			.sort((a, b) => a.timestamp - b.timestamp);
	}, [serverHistory, cutoff]);

	const networkChartData = useMemo(() => {
		return networkHistory
			.filter((item) => new Date(item.createdAt).getTime() >= cutoff)
			.map((item) => ({
				time: formatChartTime(item.createdAt),
				timestamp: new Date(item.createdAt).getTime(),
				download: formatMbps(item.downloadBytesPerSecond),
				upload: formatMbps(item.uploadBytesPerSecond),
			}))
			.sort((a, b) => a.timestamp - b.timestamp);
	}, [networkHistory, cutoff]);

	const server = data?.server;

	const cpu = server?.cpuUsagePercent;
	const memoryPercent = getPercentage(
		server?.usedMemoryBytes,
		server?.totalMemoryBytes,
	);
	const diskPercent = getPercentage(
		server?.usedDiskBytes,
		server?.totalDiskBytes,
	);
	const cpuStatus = getHealthStatus(cpu, 70, 90);

	const memoryStatus = getHealthStatus(memoryPercent, 75, 90);

	const diskStatus = getHealthStatus(diskPercent, 75, 90);

	const temperatureStatus = getHealthStatus(
		server?.cpuTemperatureCelsius,
		65,
		80,
	);

	return (
		<Box>
			<PageHeader
				title="Infrastructure Monitoring"
				subtitle="Monitor your Acer Ubuntu server, network and system resources."
			/>

			{isError && (
				<Alert severity="error" sx={{ mb: 3 }}>
					Failed to load monitoring metrics:{" "}
					{error instanceof Error ? error.message : "Unknown error"}
				</Alert>
			)}

			<Grid container spacing={2}>
				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<MetricCard
						title="CPU Usage"
						value={cpu == null ? "--" : `${cpu.toFixed(1)}%`}
						subtitle="Processor utilization"
						icon={<SpeedRounded />}
						loading={isLoading}
						status={cpuStatus}
					/>
				</Grid>

				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<MetricCard
						title="Memory Usage"
						value={
							memoryPercent == null ? "--" : `${memoryPercent.toFixed(1)}%`
						}
						subtitle={`${formatBytes(server?.usedMemoryBytes)} / ${formatBytes(server?.totalMemoryBytes)}`}
						icon={<MemoryRounded />}
						loading={isLoading}
						status={memoryStatus}
					/>
				</Grid>

				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<MetricCard
						title="Disk Usage"
						value={diskPercent == null ? "--" : `${diskPercent.toFixed(1)}%`}
						subtitle={`${formatBytes(server?.usedDiskBytes)} / ${formatBytes(server?.totalDiskBytes)}`}
						icon={<StorageRounded />}
						loading={isLoading}
						status={diskStatus}
					/>
				</Grid>

				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<MetricCard
						title="CPU Temperature"
						value={
							server?.cpuTemperatureCelsius == null
								? "--"
								: `${server.cpuTemperatureCelsius.toFixed(1)}°C`
						}
						subtitle="Processor temperature"
						icon={<ThermostatRounded />}
						loading={isLoading}
						status={temperatureStatus}
					/>
				</Grid>
			</Grid>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" fontWeight={700} gutterBottom>
					Network Interfaces
				</Typography>

				<Grid container spacing={2}>
					{data?.networks?.map((network) => (
						<Grid key={network.interfaceName} size={{ xs: 12, md: 6 }}>
							<Card
								variant="outlined"
								sx={{
									height: "100%",
									borderRadius: 3,
									backgroundColor: "background.paper",
								}}
							>
								<CardContent>
									<Typography fontWeight={700}>
										{network.displayName || network.interfaceName}
									</Typography>

									<Typography variant="body2" color="text.secondary">
										Interface: {network.interfaceName}
									</Typography>

									<Typography variant="body2" sx={{ mt: 1 }}>
										IP: {network.ipv4Addresses || "--"}
									</Typography>

									<Typography variant="body2">
										<strong>↓ Download:</strong>{" "}
										{formatNetworkSpeed(network.downloadBytesPerSecond)}
									</Typography>

									<Typography variant="body2">
										<strong>↑ Upload:</strong>{" "}
										{formatNetworkSpeed(network.uploadBytesPerSecond)}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" fontWeight={700} gutterBottom>
					Network Latency
				</Typography>

				<Grid container spacing={2}>
					{data?.latencies?.map((latency) => {
						const latencyStatus = getLatencyStatus(
							latency.averageLatencyMs,
							latency.targetName,
						);
						const packetLossStatus = getPacketLossStatus(
							latency.packetLossPercent,
						);

						return (
							<Grid key={latency.targetName} size={{ xs: 12, md: 6 }}>
								<Card
									variant="outlined"
									sx={{
										height: "100%",
										borderRadius: 3,
										backgroundColor: "background.paper",
									}}
								>
									<CardContent>
										<Typography fontWeight={700}>
											{latency.targetName}
										</Typography>

										<Typography
											variant="h5"
											fontWeight={700}
											sx={{
												mt: 1,
												color: healthStyles[latencyStatus].color,
											}}
										>
											{latency.averageLatencyMs == null
												? "--"
												: `${latency.averageLatencyMs.toFixed(1)} ms`}
										</Typography>

										<Typography variant="body2" color="text.secondary">
											Packet loss:{" "}
											<Typography
												component="span"
												variant="body2"
												sx={{
													color: healthStyles[packetLossStatus].color,
													fontWeight: 600,
												}}
											>
												{latency.packetLossPercent == null
													? "--"
													: `${latency.packetLossPercent}%`}
											</Typography>
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems={{ xs: "flex-start", sm: "center" }}
					spacing={2}
					sx={{ mb: 2 }}
				>
					<Typography variant="h6" fontWeight={700}>
						Historical Performance
					</Typography>

					<ToggleButtonGroup
						exclusive
						size="small"
						value={historyRange}
						onChange={(_, value: HistoryRange | null) => {
							if (value) setHistoryRange(value);
						}}
					>
						<ToggleButton value="1h">1 Hour</ToggleButton>
						<ToggleButton value="6h">6 Hours</ToggleButton>
						<ToggleButton value="24h">24 Hours</ToggleButton>
					</ToggleButtonGroup>
				</Stack>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, lg: 6 }}>
						<Card
							variant="outlined"
							sx={{
								height: "100%",
								borderRadius: 3,
								backgroundColor: "background.paper",
							}}
						>
							<CardContent>
								<Typography fontWeight={700} gutterBottom>
									CPU & Memory Usage
								</Typography>

								{serverHistoryLoading ? (
									<Skeleton height={280} />
								) : serverChartData.length === 0 ? (
									<Typography color="text.secondary" sx={{ py: 10 }}>
										No historical server data available for this period.
									</Typography>
								) : (
									<ResponsiveContainer width="100%" height={280}>
										<LineChart data={serverChartData}>
											<CartesianGrid strokeDasharray="3 3" opacity={0.2} />
											<XAxis dataKey="time" minTickGap={30} />
											<YAxis domain={[0, 100]} unit="%" />
											<Tooltip />
											<Legend />

											<Line
												type="monotone"
												dataKey="cpu"
												name="CPU"
												stroke="#3B82F6"
												strokeWidth={2}
												dot={false}
												connectNulls={false}
											/>

											<Line
												type="monotone"
												dataKey="memory"
												name="Memory"
												stroke="#10B981"
												strokeWidth={2}
												dot={false}
												connectNulls={false}
											/>
										</LineChart>
									</ResponsiveContainer>
								)}
							</CardContent>
						</Card>
					</Grid>

					<Grid size={{ xs: 12, lg: 6 }}>
						<Card
							variant="outlined"
							sx={{
								height: "100%",
								borderRadius: 3,
								backgroundColor: "background.paper",
							}}
						>
							<CardContent>
								<Typography fontWeight={700} gutterBottom>
									Wi-Fi Network Throughput
								</Typography>

								{networkHistoryLoading ? (
									<Skeleton height={280} />
								) : networkChartData.length === 0 ? (
									<Typography color="text.secondary" sx={{ py: 10 }}>
										No historical network data available for this period.
									</Typography>
								) : (
									<ResponsiveContainer width="100%" height={280}>
										<LineChart data={networkChartData}>
											<CartesianGrid strokeDasharray="3 3" opacity={0.2} />
											<XAxis dataKey="time" minTickGap={30} />
											<YAxis unit=" Mbps" />
											<Tooltip />
											<Legend />

											<Line
												type="monotone"
												dataKey="download"
												name="Download"
												stroke="#3B82F6"
												strokeWidth={2}
												dot={false}
												connectNulls={false}
											/>

											<Line
												type="monotone"
												dataKey="upload"
												name="Upload"
												stroke="#F59E0B"
												strokeWidth={2}
												dot={false}
												connectNulls={false}
											/>
										</LineChart>
									</ResponsiveContainer>
								)}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default MonitoringPage;
