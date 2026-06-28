import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import StopCircleRoundedIcon from "@mui/icons-material/StopCircleRounded";

import { Box, Divider, Stack, Typography } from "@mui/material";

import type { ActivityItemModel } from "../../../types/ui/activity";

interface ActivityItemProps extends ActivityItemModel {
	last?: boolean;
}

const activityConfig = {
	motion: {
		icon: <DirectionsWalkRoundedIcon fontSize="small" />,
		color: "#22c55e",
	},
	"motion-end": {
		icon: <StopCircleRoundedIcon fontSize="small" />,
		color: "#94a3b8",
	},
	device: {
		icon: <CheckCircleRoundedIcon fontSize="small" />,
		color: "#3b82f6",
	},
	system: {
		icon: <PowerSettingsNewRoundedIcon fontSize="small" />,
		color: "#8b5cf6",
	},
};

const ActivityItem = ({
	type,
	title,
	device,
	timestamp,
	last = false,
}: ActivityItemProps) => {
	const config = activityConfig[type];

	return (
		<>
			<Stack
				direction="row"
				spacing={2}
				sx={{
					alignItems: "flex-start",
					py: 1,
				}}
			>
				<Box
					sx={{
						width: 36,
						height: 36,
						borderRadius: 2,
						backgroundColor: `${config.color}20`,
						color: config.color,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexShrink: 0,
					}}
				>
					{config.icon}
				</Box>

				<Box sx={{ flex: 1 }}>
					<Typography sx={{ fontWeight: 600 }}>{title}</Typography>

					<Typography variant="body2" color="text.secondary">
						{device}
					</Typography>

					<Typography variant="caption" color="text.secondary">
						{timestamp}
					</Typography>
				</Box>
			</Stack>

			{!last && <Divider />}
		</>
	);
};

export default ActivityItem;
