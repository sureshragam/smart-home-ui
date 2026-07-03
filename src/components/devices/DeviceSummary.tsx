import { Grid } from "@mui/material";

import MemoryIcon from "@mui/icons-material/Memory";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import SensorsIcon from "@mui/icons-material/Sensors";

import DeviceSummaryCard from "./DeviceSummaryCard";

import { useDevicesData } from "../../hooks/useDevicesData";

const DeviceSummary = () => {
	const { data: devices = [] } = useDevicesData();

	const totalDevices = devices.length;

	const onlineDevices = devices.filter(
		(device) => device.status === "ONLINE",
	).length;

	const offlineDevices = totalDevices - onlineDevices;

	const activeMotionDevices = devices.filter(
		(device) => device.motionStatus === "ACTIVE",
	).length;

	return (
		<Grid container spacing={3} mb={4}>
			<Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<DeviceSummaryCard
					title="Total Devices"
					value={totalDevices}
					icon={<MemoryIcon />}
					color="#1976d2"
				/>
			</Grid>

			<Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<DeviceSummaryCard
					title="Online"
					value={onlineDevices}
					icon={<WifiIcon />}
					color="#2e7d32"
				/>
			</Grid>

			<Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<DeviceSummaryCard
					title="Offline"
					value={offlineDevices}
					icon={<WifiOffIcon />}
					color="#d32f2f"
				/>
			</Grid>

			<Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<DeviceSummaryCard
					title="Motion Active"
					value={activeMotionDevices}
					icon={<SensorsIcon />}
					color="#ed6c02"
				/>
			</Grid>
		</Grid>
	);
};

export default DeviceSummary;
