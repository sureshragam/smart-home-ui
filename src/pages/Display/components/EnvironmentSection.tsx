import AirRoundedIcon from "@mui/icons-material/AirRounded";
import DeviceThermostatRoundedIcon from "@mui/icons-material/DeviceThermostatRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import { Box, Paper, Stack, Typography } from "@mui/material";

import type { DisplayData } from "../types";

interface EnvironmentSectionProps {
	display: DisplayData;
}

interface CardProps {
	icon: React.ReactNode;
	label: string;
	value: string;
	valueColor?: string;
}

const EnvironmentCard = ({
	icon,
	label,
	value,
	valueColor = "white",
}: CardProps) => {
	return (
		<Paper
			elevation={0}
			sx={{
				bgcolor: "rgba(255,255,255,0.08)",
				backdropFilter: "blur(16px)",
				border: "1px solid rgba(255,255,255,0.15)",
				borderRadius: 4,

				px: 4,
				py: 3,

				transition: "all .25s ease",

				"&:hover": {
					bgcolor: "rgba(255,255,255,0.12)",
					transform: "translateY(-2px)",
				},
			}}
		>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Stack direction="row" spacing={2} alignItems="center">
					<Box
						sx={{
							color: "rgba(255,255,255,.85)",
							display: "flex",
							alignItems: "center",
						}}
					>
						{icon}
					</Box>

					<Typography fontSize={26} fontWeight={400}>
						{label}
					</Typography>
				</Stack>

				<Typography fontSize={30} fontWeight={600} color={valueColor}>
					{value}
				</Typography>
			</Stack>
		</Paper>
	);
};

const getAirQualityColor = (airQuality: string) => {
	switch (airQuality.toLowerCase()) {
		case "good":
			return "#4ADE80";

		case "moderate":
			return "#FACC15";

		case "poor":
			return "#FB923C";

		case "hazardous":
			return "#EF4444";

		default:
			return "white";
	}
};

const EnvironmentSection = ({ display }: EnvironmentSectionProps) => {
	return (
		<Stack
			spacing={2.5}
			sx={{
				width: "100%",
				maxWidth: 1100,
				mx: "auto",
			}}
		>
			<EnvironmentCard
				icon={<WaterDropRoundedIcon sx={{ fontSize: 34 }} />}
				label="Humidity"
				value={`${display.humidity}%`}
			/>

			<EnvironmentCard
				icon={<AirRoundedIcon sx={{ fontSize: 34 }} />}
				label="Air Quality"
				value={display.airQuality}
				valueColor={getAirQualityColor(display.airQuality)}
			/>

			<EnvironmentCard
				icon={<SpeedRoundedIcon sx={{ fontSize: 34 }} />}
				label="Pressure"
				value={`${display.pressure} hPa`}
			/>

			<EnvironmentCard
				icon={<DeviceThermostatRoundedIcon sx={{ fontSize: 34 }} />}
				label="Feels Like"
				value={`${display.feelsLike.toFixed(1)}°`}
			/>
		</Stack>
	);
};

export default EnvironmentSection;
