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
	fontSize: {
		xs: 82,
		sm: 90,
		md: 100,
		lg: 108,
	},
	color: "rgba(255,255,255,0.94)",
	filter: "drop-shadow(0 8px 24px rgba(255,255,255,0.18))",
};

const WeatherIcon = ({ temperature, date }: WeatherIconProps) => {
	const hour = date.getHours();

	// 🌙 Night
	if (hour >= 19 || hour < 6) {
		return (
			<NightsStayRoundedIcon
				sx={{
					...iconStyle,
					animation: "moonPulse 5s ease-in-out infinite",

					"@keyframes moonPulse": {
						"0%": {
							opacity: 0.75,
							transform: "scale(1)",
						},
						"50%": {
							opacity: 1,
							transform: "scale(1.08)",
						},
						"100%": {
							opacity: 0.75,
							transform: "scale(1)",
						},
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
					animation: "snowSpin 18s linear infinite",

					"@keyframes snowSpin": {
						from: {
							transform: "rotate(0deg)",
						},
						to: {
							transform: "rotate(360deg)",
						},
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
					animation: "cloudFloat 5s ease-in-out infinite",

					"@keyframes cloudFloat": {
						"0%": {
							transform: "translateX(0px)",
						},
						"25%": {
							transform: "translateX(6px)",
						},
						"50%": {
							transform: "translateX(12px)",
						},
						"75%": {
							transform: "translateX(6px)",
						},
						"100%": {
							transform: "translateX(0px)",
						},
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
					animation: "sunRotate 45s linear infinite",

					"@keyframes sunRotate": {
						from: {
							transform: "rotate(0deg)",
						},
						to: {
							transform: "rotate(360deg)",
						},
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
				animation: "firePulse 1.6s ease-in-out infinite",

				"@keyframes firePulse": {
					"0%": {
						transform: "scale(1)",
					},
					"50%": {
						transform: "scale(1.15)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			}}
		/>
	);
};

export default WeatherIcon;
