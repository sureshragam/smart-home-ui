import { Box, Typography } from "@mui/material";

import type { DisplayData } from "../types";

interface EnvironmentSectionProps {
	display: DisplayData;
}

interface RowProps {
	label: string;
	value: string;
	color?: string;
}

const Row = ({ label, value, color = "white" }: RowProps) => (
	<Box
		display="flex"
		justifyContent="space-between"
		alignItems="center"
		sx={{
			py: 2,
			borderBottom: "1px solid rgba(255,255,255,0.15)",
		}}
	>
		<Typography fontSize={30} fontWeight={300}>
			{label}
		</Typography>

		<Typography fontSize={34} fontWeight={600} color={color}>
			{value}
		</Typography>
	</Box>
);

const getAirQualityColor = (airQuality: string): string => {
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
		<Box>
			<Row label="Humidity" value={`${display.humidity}%`} />

			<Row
				label="Air Quality"
				value={display.airQuality}
				color={getAirQualityColor(display.airQuality)}
			/>

			<Row label="Pressure" value={`${display.pressure} hPa`} />

			<Row label="Feels Like" value={`${display.feelsLike.toFixed(1)}°`} />
		</Box>
	);
};

export default EnvironmentSection;
