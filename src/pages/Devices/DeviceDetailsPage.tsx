import {
	Alert,
	Box,
	Card,
	CardContent,
	Chip,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import CameraCard from "../../components/devices/CameraCard";
import PageHeader from "../../components/common/PageHeader";

export default function DeviceDetailsPage() {
	const { deviceCode } = useParams();

	if (!deviceCode) {
		return <Alert severity="error">Device not found.</Alert>;
	}

	return (
		<Box>
			<PageHeader title={deviceCode} subtitle="Device Details" />

			<Grid container spacing={3}>
				{/* Device Information */}
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

								<Chip label="ONLINE" color="success" />
							</Stack>

							<Divider sx={{ mb: 2 }} />

							<Grid container spacing={2}>
								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Device Code
									</Typography>

									<Typography fontWeight={600}>{deviceCode}</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Type
									</Typography>

									<Typography>CAMERA DEVICE</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										IP Address
									</Typography>

									<Typography>—</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Firmware
									</Typography>

									<Typography>—</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Wi-Fi
									</Typography>

									<Typography>—</Typography>
								</Grid>

								<Grid size={{ xs: 12, md: 6 }}>
									<Typography variant="body2" color="text.secondary">
										Last Seen
									</Typography>

									<Typography>—</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

				{/* Camera */}
				<Grid size={{ xs: 12, lg: 8 }}>
					<CameraCard deviceCode={deviceCode} />
				</Grid>

				{/* Reserved for future widgets */}
				<Grid size={{ xs: 12, lg: 4 }}>
					<Stack spacing={2}>
						<Card>
							<CardContent>
								<Typography variant="h6" gutterBottom>
									Health
								</Typography>

								<Typography color="text.secondary">Coming Soon</Typography>
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<Typography variant="h6" gutterBottom>
									Logs
								</Typography>

								<Typography color="text.secondary">Coming Soon</Typography>
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<Typography variant="h6" gutterBottom>
									Configuration
								</Typography>

								<Typography color="text.secondary">Coming Soon</Typography>
							</CardContent>
						</Card>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
