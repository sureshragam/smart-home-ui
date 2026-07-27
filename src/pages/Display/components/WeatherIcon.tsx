import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import WhatshotRoundedIcon from "@mui/icons-material/Whatshot";

interface Props {
	temperature: number;
	date: Date;
}

const WeatherIcon = ({ temperature, date }: Props) => {
	const hour = date.getHours();

	const isNight = hour >= 19 || hour < 6;

	if (isNight) {
		return <NightsStayRoundedIcon sx={{ fontSize: 72 }} />;
	}

	if (temperature < 15) {
		return <AcUnitRoundedIcon sx={{ fontSize: 72 }} />;
	}

	if (temperature >= 35) {
		return <WhatshotRoundedIcon sx={{ fontSize: 72 }} />;
	}

	if (temperature >= 25) {
		return <WbSunnyRoundedIcon sx={{ fontSize: 72 }} />;
	}

	return <CloudRoundedIcon sx={{ fontSize: 72 }} />;
};

export default WeatherIcon;
