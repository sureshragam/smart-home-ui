import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import LanRoundedIcon from "@mui/icons-material/LanRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useNavigate } from "react-router-dom";

interface DeviceStatusCardProps {
	id: number;
	deviceCode: string;
	name: string;
	status: "Online" | "Offline";
	wifiStrength: number;
	ipAddress: string;
	lastSeen: string;
}

const DeviceStatusCard = ({
	deviceCode,
	name,
	status,
	wifiStrength,
	ipAddress,
	lastSeen,
}: DeviceStatusCardProps) => {
	const isOnline = status === "Online";
	const navigate = useNavigate();

	const handleOpenDevice = () => {
		navigate(`/devices/${encodeURIComponent(deviceCode)}`);
	};

	const details = [
		{
			label: "Wi-Fi",
			value: wifiStrength == null ? "--" : `${wifiStrength} dBm`,
			icon: <WifiRoundedIcon fontSize="small" />,
		},
		{
			label: "IP Address",
			value: ipAddress || "--",
			icon: <LanRoundedIcon fontSize="small" />,
		},
		{
			label: "Last Seen",
			value: lastSeen || "--",
			icon: <AccessTimeRoundedIcon fontSize="small" />,
		},
	];

	return (
		<Paper
			elevation={0}
			onClick={handleOpenDevice}
			role="button"
			tabIndex={0}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					handleOpenDevice();
				}
			}}
			sx={{
				height: "100%",
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 3,
				p: 2,
				cursor: "pointer",
				transition: "all 0.2s ease",
				"&:hover": {
					borderColor: "primary.main",
					transform: "translateY(-2px)",
					boxShadow: 2,
				},
				"&:focus-visible": {
					outline: "2px solid",
					outlineColor: "primary.main",
				},
			}}
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={1}
				sx={{ mb: 1.5, minWidth: 0 }}
			>
				<Typography variant="subtitle1" fontWeight={700} noWrap>
					{name}
				</Typography>

				<Chip
					label={status}
					color={isOnline ? "success" : "error"}
					size="small"
					sx={{ height: 22, fontSize: "0.7rem", flexShrink: 0 }}
				/>
			</Stack>

			<Stack spacing={1}>
				{details.map((item) => (
					<Stack
						key={item.label}
						direction="row"
						alignItems="center"
						spacing={1}
						sx={{ minWidth: 0 }}
					>
						<Box
							sx={{ display: "flex", color: "text.secondary", flexShrink: 0 }}
						>
							{item.icon}
						</Box>

						<Typography
							variant="caption"
							color="text.secondary"
							sx={{ width: 65, flexShrink: 0 }}
						>
							{item.label}
						</Typography>

						<Typography
							variant="caption"
							fontWeight={600}
							textAlign="right"
							title={String(item.value)}
							sx={{
								ml: "auto",
								minWidth: 0,
								overflowWrap: "anywhere",
							}}
						>
							{item.value}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Paper>
	);
};

export default DeviceStatusCard;
