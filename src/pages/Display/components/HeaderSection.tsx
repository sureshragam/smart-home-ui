import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Box, Stack, Typography } from "@mui/material";

import type { DisplayData } from "../types";

interface HeaderSectionProps {
	display: DisplayData;
}

const HeaderSection = ({ display }: HeaderSectionProps) => {
	return (
		<Box display="flex" justifyContent="space-between" alignItems="flex-start">
			{/* Left Section */}
			<Stack spacing={0.5}>
				<Typography fontSize={36} fontWeight={600}>
					{display.date.toLocaleDateString("en-US", {
						weekday: "long",
					})}
				</Typography>

				<Typography fontSize={22}>
					{display.date.toLocaleDateString("en-US", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</Typography>

				<Typography fontSize={48} fontWeight={300}>
					{display.date.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</Typography>
			</Stack>

			{/* Right Section */}
			<Stack alignItems="center" spacing={1}>
				<HomeRoundedIcon
					sx={{
						fontSize: 48,
					}}
				/>

				<Typography fontSize={120} fontWeight={200} lineHeight={1}>
					{display.temperature.toFixed(1)}°
				</Typography>

				<Typography fontSize={30} fontWeight={600}>
					{getComfortStatus(display.temperature)}
				</Typography>

				<Typography fontSize={22}>{display.roomName}</Typography>
			</Stack>
		</Box>
	);
};

const getComfortStatus = (temperature: number): string => {
	if (temperature < 20) return "Cold";
	if (temperature < 25) return "Comfortable";
	if (temperature < 30) return "Warm";
	return "Hot";
};

export default HeaderSection;
