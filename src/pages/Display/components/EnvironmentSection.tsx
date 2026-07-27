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

const AnimatedValue = ({ children }: { children: React.ReactNode }) => (
	<Box
		sx={{
			animation: "fadeValue .35s ease",

			"@keyframes fadeValue": {
				from: {
					opacity: 0,
					transform: "translateY(6px)",
				},
				to: {
					opacity: 1,
					transform: "translateY(0)",
				},
			},
		}}
	>
		{children}
	</Box>
);

const EnvironmentCard = ({
	icon,
	label,
	value,
	valueColor = "#FFFFFF",
}: CardProps) => {
	const isAirQuality = label === "Air Quality";

	return (
		<Paper
			elevation={0}
			sx={{
				bgcolor: "rgba(255,255,255,0.12)",
				border: "1px solid rgba(255,255,255,0.18)",
				backdropFilter: "blur(18px)",
				boxShadow: "0 12px 40px rgba(0,0,0,.18)",
				borderRadius: 4,
				px: 4,
				py: 3.2,
				transition: "all .25s ease",

				"&:hover": {
					transform: "translateY(-3px)",
					bgcolor: "rgba(255,255,255,0.14)",
					boxShadow: "0 16px 45px rgba(0,0,0,.22)",
				},
			}}
		>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Stack direction="row" spacing={2} alignItems="center">
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						{icon}
					</Box>

					<Typography
						fontSize={24}
						fontWeight={500}
						color="rgba(255,255,255,.95)"
					>
						{label}
					</Typography>
				</Stack>

				<AnimatedValue>
					{isAirQuality ? (
						<Box
							sx={{
								px: 2.5,
								py: 0.8,
								borderRadius: 999,
								bgcolor: `${valueColor}22`,
								border: `1px solid ${valueColor}`,
								minWidth: 140,
								textAlign: "center",
							}}
						>
							<Typography fontSize={22} fontWeight={700} color={valueColor}>
								{value}
							</Typography>
						</Box>
					) : (
						<Typography fontSize={30} fontWeight={700} color={valueColor}>
							{value}
						</Typography>
					)}
				</AnimatedValue>
			</Stack>
		</Paper>
	);
};

const EnvironmentSection = ({ display }: EnvironmentSectionProps) => {
	return (
		<Stack
			spacing={2.5}
			sx={{
				width: "100%",
				maxWidth: 1300,
				mx: "auto",
			}}
		>
			<EnvironmentCard
				icon={
					<WaterDropRoundedIcon
						sx={{
							fontSize: 34,
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
							fontSize: 34,
							color: "#A5F3FC",
						}}
					/>
				}
				label="Air Quality"
				value={`${display.airQuality} (${display.airQualityPpm} PPM)`}
				valueColor={getAirQualityColor(display.airQuality)}
			/>

			<EnvironmentCard
				icon={
					<SpeedRoundedIcon
						sx={{
							fontSize: 34,
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
							fontSize: 34,
							color: "#F97316",
						}}
					/>
				}
				label="Feels Like"
				value={`${display.feelsLike.toFixed(1)}°`}
			/>
		</Stack>
	);
};

export default EnvironmentSection;
