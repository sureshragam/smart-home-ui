import { Stack, Typography } from "@mui/material";

import type { DeviceResponse } from "../../../types/api/device";
import DeviceStatusCard from "./DeviceStatusCard";
import { mapDevicesToCards } from "../../../mappers/deviceMapper";

interface DeviceStatusProps {
	devices: DeviceResponse[];
}

const DeviceStatus = ({ devices }: DeviceStatusProps) => {
	const deviceCards = mapDevicesToCards(devices);
	return (
		<Stack spacing={3} sx={{ mt: 4 }}>
			<Typography variant="h5" fontWeight={600}>
				Device Status
			</Typography>

			{deviceCards.map((device) => (
				<DeviceStatusCard key={device.id} {...device} />
			))}
		</Stack>
	);
};

export default DeviceStatus;
