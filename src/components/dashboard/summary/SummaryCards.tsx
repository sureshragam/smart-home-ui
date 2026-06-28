import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { Grid } from "@mui/material";

import { mapDashboardToSummaryCards } from "../../../mappers/dashboardMapper";
import type { DashboardResponse } from "../../../types/api/dashboard";
import type { SummaryCardIcon } from "../../../types/ui/summaryCard";

import SummaryCard from "./SummaryCard";

interface SummaryCardsProps {
	data: DashboardResponse;
}

const iconMap: Record<SummaryCardIcon, React.ReactNode> = {
	devices: <DevicesRoundedIcon />,
	motion: <SensorsRoundedIcon />,
	alerts: <WarningAmberRoundedIcon />,
	uptime: <AccessTimeRoundedIcon />,
};

const SummaryCards = ({ data }: SummaryCardsProps) => {
	const cards = mapDashboardToSummaryCards(data);

	return (
		<Grid container spacing={3}>
			{cards.map((card) => (
				<Grid key={card.id} size={{ xs: 12, sm: 6, lg: 3 }}>
					<SummaryCard
						title={card.title}
						value={card.value}
						subtitle={card.subtitle}
						icon={iconMap[card.icon]}
						iconColor={card.iconColor}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default SummaryCards;
