import { Box, Stack, Typography } from "@mui/material";

import type { DisplayData } from "../types";
import WeatherIcon from "./WeatherIcon";

interface HeaderSectionProps {
	display: DisplayData;
}

const getGreeting = (date: Date) => {
	const hour = date.getHours();

	if (hour < 12) return "Good Morning";
	if (hour < 17) return "Good Afternoon";
	if (hour < 20) return "Good Evening";

	return "Good Night";
};

const getComfortStatus = (temperature: number): string => {
	if (temperature < 20) return "Cold";
	if (temperature < 25) return "Comfortable";
	if (temperature < 30) return "Warm";
	return "Hot";
};

const HeaderSection = ({ display }: HeaderSectionProps) => {
	const currentTime = display.date.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<Box display="flex" justifyContent="space-between" alignItems="flex-start">
			{/* Left */}
			<Stack spacing={0.5}>
				<Typography
					fontSize={22}
					fontWeight={500}
					sx={{
						opacity: 0.8,
						letterSpacing: 0.5,
					}}
				>
					{getGreeting(display.date)}
				</Typography>

				<Typography fontSize={40} fontWeight={700}>
					{display.date.toLocaleDateString("en-US", {
						weekday: "long",
					})}
				</Typography>

				<Typography
					fontSize={24}
					sx={{
						opacity: 0.85,
					}}
				>
					{display.date.toLocaleDateString("en-US", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</Typography>

				<Box
					key={currentTime}
					sx={{
						animation: "timeFade .4s ease",

						"@keyframes timeFade": {
							from: {
								opacity: 0,
								transform: "translateY(10px)",
							},
							to: {
								opacity: 1,
								transform: "translateY(0px)",
							},
						},
					}}
				>
					<Typography fontSize={60} fontWeight={300} letterSpacing={1}>
						{currentTime}
					</Typography>
				</Box>
			</Stack>

			{/* Right */}
			<Stack alignItems="center" spacing={1}>
				<WeatherIcon temperature={display.temperature} date={display.date} />

				<Typography
					fontWeight={200}
					lineHeight={1}
					fontSize={{
						xs: 90,
						md: 105,
						lg: 112,
					}}
				>
					{display.temperature.toFixed(1)}°
				</Typography>

				<Typography
					fontSize={28}
					fontWeight={600}
					sx={{
						opacity: 0.95,
					}}
				>
					{getComfortStatus(display.temperature)}
				</Typography>

				<Typography
					fontSize={22}
					sx={{
						opacity: 0.75,
						letterSpacing: 1,
					}}
				>
					{display.roomName}
				</Typography>
			</Stack>
		</Box>
	);
};

export default HeaderSection;
