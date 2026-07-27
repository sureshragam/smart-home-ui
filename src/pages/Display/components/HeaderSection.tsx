import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";

interface WeatherIconProps {
	temperature: number;
	date: Date;
}

const WeatherIcon = ({ temperature, date }: WeatherIconProps) => {
	const hour = date.getHours();

	const iconStyle = {
		fontSize: 72,
		color: "rgba(255,255,255,0.92)",
	};

	// Night
	if (hour >= 19 || hour < 6) {
		return <NightsStayRoundedIcon sx={iconStyle} />;
	}

	// Cold
	if (temperature < 15) {
		return <AcUnitRoundedIcon sx={iconStyle} />;
	}

	// Pleasant
	if (temperature < 25) {
		return <CloudRoundedIcon sx={iconStyle} />;
	}

	// Warm
	if (temperature < 35) {
		return <WbSunnyRoundedIcon sx={iconStyle} />;
	}

	// Hot
	return <WhatshotRoundedIcon sx={iconStyle} />;
};

export default WeatherIcon;
