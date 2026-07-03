import {
	Card,
	CardContent,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Typography,
} from "@mui/material";

import { useDevicesData } from "../../hooks/useDevicesData";

import DeviceTableRow from "./DeviceTableRow";

const DeviceTable = () => {
	const { data: devices = [] } = useDevicesData();

	return (
		<Card
			elevation={0}
			sx={{
				borderRadius: 4,
				border: "1px solid",
				borderColor: "divider",
			}}
		>
			<CardContent>
				<Typography variant="h6" fontWeight={600} mb={3}>
					Registered Devices
				</Typography>

				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Status</TableCell>

								<TableCell>Name</TableCell>

								<TableCell>Type</TableCell>

								<TableCell>IP Address</TableCell>

								<TableCell>WiFi</TableCell>

								<TableCell>Firmware</TableCell>

								<TableCell>Last Seen</TableCell>

								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{devices.map((device) => (
								<DeviceTableRow key={device.id} device={device} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</CardContent>
		</Card>
	);
};

export default DeviceTable;
