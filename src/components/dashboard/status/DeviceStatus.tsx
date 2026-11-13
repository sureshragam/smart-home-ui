import { Grid, Stack, Typography } from "@mui/material";

import type { DeviceResponse } from "../../../types/api/device";
import DeviceStatusCard from "./DeviceStatusCard";
import { mapDevicesToCards } from "../../../mappers/deviceMapper";

interface DeviceStatusProps {
	devices: DeviceResponse[];
}

const DeviceStatus = ({ devices }: DeviceStatusProps) => {
	const deviceCards = mapDevicesToCards(devices);

	return (
		<Stack spacing={2} sx={{ mt: 3 }}>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Typography variant="h5" fontWeight={600}>
					Device Status
				</Typography>

				<Typography variant="caption" color="text.secondary">
					{deviceCards.length} {deviceCards.length === 1 ? "Device" : "Devices"}
				</Typography>
			</Stack>

			<Grid container spacing={2}>
				{deviceCards.map((device) => (
					<Grid key={device.id} size={{ xs: 12, sm: 6, lg: 4 }}>
						<DeviceStatusCard {...device} />
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};

export default DeviceStatus;
