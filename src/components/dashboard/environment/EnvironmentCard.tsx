import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import CompressRoundedIcon from "@mui/icons-material/CompressRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import DoorFrontRoundedIcon from "@mui/icons-material/DoorFrontRounded";

import {
	Card,
	CardContent,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";

interface Props {
	temperature: number;
	humidity: number;
	pressure: number;
	airQuality: number;
	doorStatus: boolean;
}

const EnvironmentCard = ({
	temperature,
	humidity,
	pressure,
	airQuality,
	doorStatus,
}: Props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6" fontWeight={600} gutterBottom>
					Environment
				</Typography>

				<Divider sx={{ mb: 3 }} />

				<Grid container spacing={3}>
					<Grid size={2.4}>
						<Stack alignItems="center" spacing={1}>
							<ThermostatRoundedIcon color="error" />

							<Typography variant="body2">Temperature</Typography>

							<Typography variant="h5">{temperature.toFixed(1)}°C</Typography>
						</Stack>
					</Grid>

					<Grid size={2.4}>
						<Stack alignItems="center" spacing={1}>
							<WaterDropRoundedIcon color="primary" />

							<Typography variant="body2">Humidity</Typography>

							<Typography variant="h5">{humidity.toFixed(1)}%</Typography>
						</Stack>
					</Grid>

					<Grid size={2.4}>
						<Stack alignItems="center" spacing={1}>
							<CompressRoundedIcon color="success" />

							<Typography variant="body2">Pressure</Typography>

							<Typography variant="h5">{pressure.toFixed(1)} hPa</Typography>
						</Stack>
					</Grid>

					<Grid size={2.4}>
						<Stack alignItems="center" spacing={1}>
							<AirRoundedIcon color="info" />

							<Typography variant="body2">Air Quality</Typography>

							<Typography variant="h5">{Math.round(airQuality)} PPM</Typography>
						</Stack>
					</Grid>

					<Grid size={2.4}>
						<Stack alignItems="center" spacing={1}>
							<DoorFrontRoundedIcon
								color={doorStatus ? "warning" : "success"}
							/>

							<Typography variant="body2">Door</Typography>

							<Typography
								variant="h5"
								color={doorStatus ? "warning.main" : "success.main"}
							>
								{doorStatus ? "Open" : "Closed"}
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default EnvironmentCard;
