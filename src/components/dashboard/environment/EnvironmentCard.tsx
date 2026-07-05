import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";

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
}

const EnvironmentCard = ({ temperature, humidity, pressure }: Props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6" fontWeight={600} gutterBottom>
					Environment
				</Typography>

				<Divider sx={{ mb: 3 }} />

				<Grid container spacing={3}>
					<Grid size={4}>
						<Stack alignItems="center" spacing={1}>
							<ThermostatRoundedIcon color="error" />

							<Typography variant="body2">Temperature</Typography>

							<Typography variant="h5">{temperature.toFixed(1)}°C</Typography>
						</Stack>
					</Grid>

					<Grid size={4}>
						<Stack alignItems="center" spacing={1}>
							<WaterDropRoundedIcon color="primary" />

							<Typography variant="body2">Humidity</Typography>

							<Typography variant="h5">{humidity.toFixed(1)}%</Typography>
						</Stack>
					</Grid>

					<Grid size={4}>
						<Stack alignItems="center" spacing={1}>
							<AirRoundedIcon color="success" />

							<Typography variant="body2">Pressure</Typography>

							<Typography variant="h5">{pressure.toFixed(1)} hPa</Typography>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default EnvironmentCard;
