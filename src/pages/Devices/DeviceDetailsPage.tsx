import {
	Alert,
	Box,
	Card,
	CardContent,
	Chip,
	CircularProgress,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import CameraCard from "../../components/devices/CameraCard";
import PageHeader from "../../components/common/PageHeader";
import { useDevice } from "../../hooks/useDevice";

export default function DeviceDetailsPage() {
	const { deviceCode } = useParams();

	const { data: device, isLoading } = useDevice(deviceCode ?? "");
	if (!deviceCode) {
		return <Alert severity="error">Device not found.</Alert>;
	}

	if (isLoading) {
		return <CircularProgress />;
	}

	if (!device) {
		return <Alert severity="error">Unable to load device.</Alert>;
	}

	return (
		<Box>
			<PageHeader title={device.name} subtitle="Device Details" />

			<Grid container spacing={3}>
				<Grid size={{ xs: 12 }}>
					<Card>
						<CardContent>
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								mb={2}
							>
								<Typography variant="h6">Device Information</Typography>

								<Chip
									label={device.status}
									color={device.status === "ONLINE" ? "success" : "error"}
								/>
							</Stack>

							<Divider sx={{ mb: 2 }} />

							<Grid container spacing={2}>
								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Device Code
									</Typography>

									<Typography>{device.deviceCode}</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Type
									</Typography>

									<Typography>{device.type}</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										IP Address
									</Typography>

									<Typography>{device.ipAddress}</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Firmware
									</Typography>

									<Typography>{device.firmwareVersion}</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Wi-Fi
									</Typography>

									<Typography>{device.wifiStrength}%</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Last Seen
									</Typography>

									<Typography>{device.lastSeen}</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

				<Grid size={{ xs: 12, lg: 8 }}>
					<CameraCard device={device} />
				</Grid>

				<Grid size={{ xs: 12, lg: 4 }}>
					<Stack spacing={2}>
						<Card>
							<CardContent>
								<Typography variant="h6">Health</Typography>

								<Typography color="text.secondary">Coming Soon</Typography>
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<Typography variant="h6">Logs</Typography>

								<Typography color="text.secondary">Coming Soon</Typography>
							</CardContent>
						</Card>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
