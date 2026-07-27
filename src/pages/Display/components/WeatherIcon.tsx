import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";

interface WeatherIconProps {
	temperature: number;
	date: Date;
}

const iconStyle = {
	fontSize: 88,
	color: "rgba(255,255,255,0.92)",
};

const WeatherIcon = ({ temperature, date }: WeatherIconProps) => {
	const hour = date.getHours();

	// 🌙 Night
	if (hour >= 19 || hour < 6) {
		return (
			<NightsStayRoundedIcon
				sx={{
					...iconStyle,
					animation: "pulse 4s ease-in-out infinite",
					"@keyframes pulse": {
						"0%": { opacity: 0.7, transform: "scale(1)" },
						"50%": { opacity: 1, transform: "scale(1.08)" },
						"100%": { opacity: 0.7, transform: "scale(1)" },
					},
				}}
			/>
		);
	}

	// ❄️ Cold
	if (temperature < 15) {
		return (
			<AcUnitRoundedIcon
				sx={{
					...iconStyle,
					animation: "spin 20s linear infinite",
					"@keyframes spin": {
						from: { transform: "rotate(0deg)" },
						to: { transform: "rotate(360deg)" },
					},
				}}
			/>
		);
	}

	// ☁️ Pleasant
	if (temperature < 25) {
		return (
			<CloudRoundedIcon
				sx={{
					...iconStyle,
					animation: "float 4s ease-in-out infinite",
					"@keyframes float": {
						"0%": { transform: "translateX(0px)" },
						"50%": { transform: "translateX(8px)" },
						"100%": { transform: "translateX(0px)" },
					},
				}}
			/>
		);
	}

	// ☀️ Warm
	if (temperature < 35) {
		return (
			<WbSunnyRoundedIcon
				sx={{
					...iconStyle,
					animation: "spin 60s linear infinite",
					"@keyframes spin": {
						from: { transform: "rotate(0deg)" },
						to: { transform: "rotate(360deg)" },
					},
				}}
			/>
		);
	}

	// 🔥 Hot
	return (
		<WhatshotRoundedIcon
			sx={{
				...iconStyle,
				animation: "flame 1.5s ease-in-out infinite",
				"@keyframes flame": {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.12)" },
					"100%": { transform: "scale(1)" },
				},
			}}
		/>
	);
};

export default WeatherIcon;
