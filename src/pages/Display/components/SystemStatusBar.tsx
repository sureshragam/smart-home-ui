import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import { Chip, Stack } from "@mui/material";

interface SystemStatusBarProps {
	esp32Online: boolean;
	wifiStrength: number;
	lastSeen?: string;
}

const getWifiQuality = (rssi: number) => {
	if (rssi >= -50) return "Excellent";
	if (rssi >= -60) return "Good";
	if (rssi >= -70) return "Fair";
	if (rssi >= -80) return "Poor";

	return "Very Poor";
};

const getWifiColor = (rssi: number) => {
	if (rssi >= -50) return "#22C55E"; // Green
	if (rssi >= -60) return "#4ADE80"; // Light Green
	if (rssi >= -70) return "#FACC15"; // Yellow
	if (rssi >= -80) return "#FB923C"; // Orange

	return "#EF4444"; // Red
};
const getLastUpdated = (lastSeen?: string) => {
	if (!lastSeen) return "Never";

	const seconds = Math.floor(
		(Date.now() - new Date(lastSeen).getTime()) / 1000,
	);

	if (seconds < 5) return "Just now";

	if (seconds < 60) return `${seconds}s ago`;

	const minutes = Math.floor(seconds / 60);

	if (minutes < 60) return `${minutes}m ago`;

	const hours = Math.floor(minutes / 60);

	if (hours < 24) return `${hours}h ago`;

	const days = Math.floor(hours / 24);

	return `${days}d ago`;
};

const SystemStatusBar = ({
	esp32Online,
	wifiStrength,
	lastSeen,
}: SystemStatusBarProps) => {
	return (
		<Stack
			direction="row"
			spacing={2}
			justifyContent="center"
			alignItems="center"
			flexWrap="wrap"
			mt={5}
		>
			<Chip
				icon={<MemoryRoundedIcon />}
				label={`ESP32 ${esp32Online ? "Online" : "Offline"}`}
				sx={{
					bgcolor: "rgba(255,255,255,.08)",
					color: "white",
					border: `1px solid ${
						esp32Online ? "rgba(34,197,94,.5)" : "rgba(239,68,68,.5)"
					}`,
					backdropFilter: "blur(12px)",

					"& .MuiChip-icon": {
						color: esp32Online ? "#22C55E" : "#EF4444",
					},
				}}
			/>

			<Chip
				icon={<WifiRoundedIcon />}
				label={`Wi-Fi ${getWifiQuality(wifiStrength)}`}
				sx={{
					bgcolor: "rgba(255,255,255,.08)",
					color: "white",
					border: `1px solid ${getWifiColor(wifiStrength)}55`,
					backdropFilter: "blur(12px)",

					"& .MuiChip-icon": {
						color: getWifiColor(wifiStrength),
					},
				}}
			/>

			<Chip
				icon={<SyncRoundedIcon />}
				label={`Updated ${getLastUpdated(lastSeen)}`}
				sx={{
					bgcolor: "rgba(255,255,255,.08)",
					color: "white",
					border: "1px solid rgba(255,255,255,.18)",
					backdropFilter: "blur(12px)",

					"& .MuiChip-icon": {
						color: "white",
					},
				}}
			/>
		</Stack>
	);
};

export default SystemStatusBar;
