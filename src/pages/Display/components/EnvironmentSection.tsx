import React from "react";

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

const getAirQualityColor = (airQuality: string) => {
	switch (airQuality.toLowerCase()) {
		case "good":
			return "#22C55E";
		case "moderate":
			return "#FACC15";
		case "poor":
			return "#FB923C";
		case "hazardous":
			return "#EF4444";
		default:
			return "#FFFFFF";
	}
};

const EnvironmentCard = ({
	icon,
	label,
	value,
	valueColor = "#FFFFFF",
}: CardProps) => (
	<Paper
		elevation={0}
		sx={{
			background: "rgba(255,255,255,.12)",
			backdropFilter: "blur(18px)",
			borderRadius: 3,
			border: "1px solid rgba(255,255,255,.18)",

			p: 2.2,

			height: "100%",
		}}
	>
		<Stack spacing={1.2}>
			<Box display="flex" alignItems="center" gap={1}>
				{icon}

				<Typography fontSize={18} fontWeight={600}>
					{label}
				</Typography>
			</Box>

			<Typography fontSize={28} fontWeight={700} color={valueColor}>
				{value}
			</Typography>
		</Stack>
	</Paper>
);

const EnvironmentSection = ({ display }: EnvironmentSectionProps) => {
	return (
		<Box
			sx={{
				display: "grid",

				gridTemplateColumns: {
					xs: "1fr",
					md: "1fr 1fr",
				},

				gap: 2.5,

				width: "100%",
			}}
		>
			<EnvironmentCard
				icon={
					<WaterDropRoundedIcon
						sx={{
							fontSize: 28,
							color: "#38BDF8",
						}}
					/>
				}
				label="Humidity"
				value={`${display.humidity}%`}
			/>

			<EnvironmentCard
				icon={
					<AirRoundedIcon
						sx={{
							fontSize: 28,
							color: "#A5F3FC",
						}}
					/>
				}
				label="Air Quality"
				value={display.airQuality}
				valueColor={getAirQualityColor(display.airQuality)}
			/>

			<EnvironmentCard
				icon={
					<SpeedRoundedIcon
						sx={{
							fontSize: 28,
							color: "#C4B5FD",
						}}
					/>
				}
				label="Pressure"
				value={`${display.pressure} hPa`}
			/>

			<EnvironmentCard
				icon={
					<DeviceThermostatRoundedIcon
						sx={{
							fontSize: 28,
							color: "#F97316",
						}}
					/>
				}
				label="Feels Like"
				value={`${display.feelsLike.toFixed(1)}°`}
			/>
		</Box>
	);
};

export default EnvironmentSection;
