import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CircularProgress,
	Grid,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import DashboardHero from "../../components/dashboard/hero";
import SummaryCards from "../../components/dashboard/summary";
import DeviceStatus from "../../components/dashboard/status";
import RecentActivity from "../../components/dashboard/activity";
import SystemHealth from "../../components/dashboard/health";

import { useDashboardData } from "../../hooks/useDashboardData";
import { useDevicesData } from "../../hooks/useDevicesData";
import { useActivitiesData } from "../../hooks/useActivitiesData";
import { useHealthData } from "../../hooks/useHealthData";
import { useEnvironmentData } from "../../hooks/useEnvironmentData";
import { useMonitoring } from "../../hooks/useMonitoring";
import EnvironmentCard from "../../components/dashboard/environment";

type HealthStatus = "healthy" | "warning" | "critical" | "unknown";

const healthColors: Record<HealthStatus, string> = {
	healthy: "#4ADE80",
	warning: "#FBBF24",
	critical: "#F87171",
	unknown: "#AAB4C3",
};

const healthLabels: Record<HealthStatus, string> = {
	healthy: "Healthy",
	warning: "Warning",
	critical: "Critical",
	unknown: "Unavailable",
};

const getPercentage = (
	used: number | null | undefined,
	total: number | null | undefined,
): number | null => {
	if (used == null || total == null || total <= 0) return null;
	return (used / total) * 100;
};

const getThresholdStatus = (
	value: number | null | undefined,
	warningThreshold: number,
	criticalThreshold: number,
): HealthStatus => {
	if (value == null) return "unknown";
	if (value >= criticalThreshold) return "critical";
	if (value >= warningThreshold) return "warning";
	return "healthy";
};

const getNetworkStatus = (
	latencies:
		| {
				targetName: string;
				averageLatencyMs: number | null;
				packetLossPercent: number | null;
				measurementAvailable: boolean;
		  }[]
		| undefined,
): HealthStatus => {
	const availableMeasurements =
		latencies?.filter((item) => item.measurementAvailable) ?? [];

	if (availableMeasurements.length === 0) return "unknown";

	const statuses = availableMeasurements
		.map((item) => {
			const isRouter = item.targetName.toLowerCase() === "router";
			const latencyStatus = getThresholdStatus(
				item.averageLatencyMs,
				isRouter ? 20 : 50,
				isRouter ? 100 : 150,
			);
			const packetLossStatus =
				item.packetLossPercent == null
					? "unknown"
					: item.packetLossPercent > 2
						? "critical"
						: item.packetLossPercent > 0
							? "warning"
							: "healthy";

			return [latencyStatus, packetLossStatus];
		})
		.flat();

	if (statuses.includes("critical")) return "critical";
	if (statuses.includes("warning")) return "warning";
	if (statuses.includes("unknown")) return "unknown";
	return "healthy";
};

const getOverallStatus = (statuses: HealthStatus[]): HealthStatus => {
	if (statuses.includes("critical")) return "critical";
	if (statuses.includes("warning")) return "warning";
	if (statuses.includes("unknown")) return "unknown";
	return "healthy";
};

const formatMetric = (
	value: number | null | undefined,
	suffix = "%",
): string => (value == null ? "--" : `${value.toFixed(1)}${suffix}`);

interface HealthMetricProps {
	label: string;
	value: string;
	status: HealthStatus;
}

const HealthMetric = ({ label, value, status }: HealthMetricProps) => (
	<Box>
		<Typography variant="caption" color="text.secondary">
			{label}
		</Typography>
		<Typography
			variant="h6"
			fontWeight={700}
			sx={{ color: healthColors[status] }}
		>
			{value}
		</Typography>
	</Box>
);

const DashboardPage = () => {
	const navigate = useNavigate();

	const {
		data: dashboardData,
		isLoading: isDashboardLoading,
		isError: isDashboardError,
	} = useDashboardData();

	const {
		data: deviceList,
		isLoading: isDevicesLoading,
		isError: isDevicesError,
	} = useDevicesData();

	const {
		data: activityList,
		isLoading: isActivitiesLoading,
		isError: isActivitiesError,
	} = useActivitiesData();

	const {
		data: healthMetrics,
		isLoading: isHealthLoading,
		isError: isHealthError,
	} = useHealthData();

	const {
		data: environmentData,
		isLoading: isEnvironmentLoading,
		isError: isEnvironmentError,
	} = useEnvironmentData();

	// Monitoring loads independently so it does not delay the rest of the dashboard.
	const {
		data: monitoringData,
		isLoading: isMonitoringLoading,
		isError: isMonitoringError,
	} = useMonitoring();

	const isLoading =
		isDashboardLoading ||
		isDevicesLoading ||
		isActivitiesLoading ||
		isHealthLoading ||
		isEnvironmentLoading;

	const isError =
		isDashboardError ||
		isDevicesError ||
		isActivitiesError ||
		isHealthError ||
		isEnvironmentError;

	const server = monitoringData?.server;
	const cpu = server?.cpuUsagePercent;
	const memoryPercent = getPercentage(
		server?.usedMemoryBytes,
		server?.totalMemoryBytes,
	);
	const diskPercent = getPercentage(
		server?.usedDiskBytes,
		server?.totalDiskBytes,
	);
	const temperature = server?.cpuTemperatureCelsius;

	const cpuStatus = getThresholdStatus(cpu, 70, 90);
	const memoryStatus = getThresholdStatus(memoryPercent, 75, 90);
	const diskStatus = getThresholdStatus(diskPercent, 75, 90);
	const temperatureStatus = getThresholdStatus(temperature, 65, 80);
	const networkStatus = getNetworkStatus(monitoringData?.latencies);

	const overallStatus =
		isMonitoringError || !monitoringData
			? "unknown"
			: getOverallStatus([
					cpuStatus,
					memoryStatus,
					diskStatus,
					temperatureStatus,
					networkStatus,
				]);

	if (isLoading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
				<CircularProgress size={40} aria-label="Loading dashboard" />
			</Box>
		);
	}

	if (
		isError ||
		!dashboardData ||
		!deviceList ||
		!activityList ||
		!healthMetrics ||
		!environmentData
	) {
		return (
			<div>
				<DashboardHero isSystemHealthy={false} />
				<p>Server is not responding please try again later.</p>
			</div>
		);
	}

	return (
		<>
			<DashboardHero />

			<SummaryCards data={dashboardData} />

			<Card
				variant="outlined"
				sx={{
					mt: 3,
					borderRadius: 3,
					backgroundColor: "background.paper",
				}}
			>
				<CardActionArea
					onClick={() => navigate("/monitoring")}
					aria-label="Open detailed infrastructure monitoring"
				>
					<CardContent sx={{ p: 3 }}>
						<Stack
							direction={{ xs: "column", sm: "row" }}
							justifyContent="space-between"
							alignItems={{ xs: "flex-start", sm: "center" }}
							spacing={1}
							sx={{ mb: 2 }}
						>
							<Box>
								<Typography variant="h6" fontWeight={700}>
									Server Health
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Live overview of your Acer Ubuntu server
								</Typography>
							</Box>

							<Typography
								variant="subtitle2"
								fontWeight={700}
								sx={{ color: healthColors[overallStatus] }}
							>
								{isMonitoringLoading
									? "Checking..."
									: healthLabels[overallStatus]}
							</Typography>
						</Stack>

						{isMonitoringLoading ? (
							<Grid container spacing={2}>
								{Array.from({ length: 5 }).map((_, index) => (
									<Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
										<Skeleton width="70%" />
										<Skeleton width="45%" height={32} />
									</Grid>
								))}
							</Grid>
						) : (
							<Grid container spacing={2}>
								<Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
									<HealthMetric
										label="CPU"
										value={formatMetric(cpu)}
										status={cpuStatus}
									/>
								</Grid>
								<Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
									<HealthMetric
										label="Memory"
										value={formatMetric(memoryPercent)}
										status={memoryStatus}
									/>
								</Grid>
								<Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
									<HealthMetric
										label="Disk"
										value={formatMetric(diskPercent)}
										status={diskStatus}
									/>
								</Grid>
								<Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
									<HealthMetric
										label="CPU Temperature"
										value={formatMetric(temperature, "°C")}
										status={temperatureStatus}
									/>
								</Grid>
								<Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
									<HealthMetric
										label="Network"
										value={healthLabels[networkStatus]}
										status={networkStatus}
									/>
								</Grid>
							</Grid>
						)}

						<Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
							<Typography variant="body2" fontWeight={600} color="primary.main">
								View detailed monitoring →
							</Typography>
						</Stack>
					</CardContent>
				</CardActionArea>
			</Card>

			<Grid container spacing={3} sx={{ mt: 1 }}>
				<Grid size={12}>
					<DeviceStatus devices={deviceList} />
				</Grid>

				<Grid size={12}>
					<RecentActivity activities={activityList} />
				</Grid>

				<Grid size={12}>
					<EnvironmentCard
						temperature={environmentData.temperature}
						humidity={environmentData.humidity}
						pressure={environmentData.pressure}
						doorStatus={environmentData.doorStatus}
						airQuality={environmentData.airQuality}
					/>
				</Grid>

				<Grid size={12}>
					<SystemHealth metrics={healthMetrics} />
				</Grid>
			</Grid>
		</>
	);
};

export default DashboardPage;
