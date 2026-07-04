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

import DeviceTableRow from "./DeviceTableRow";

const DeviceTable = ({ devices }) => {
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
							{devices?.length > 0 ? (
								devices.map((device) => (
									<DeviceTableRow key={device.id} device={device} />
								))
							) : (
								<TableRow>
									<p style={{ textAlign: "center" }}>No records</p>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</CardContent>
		</Card>
	);
};

export default DeviceTable;
