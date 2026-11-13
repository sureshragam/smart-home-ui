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
				alignItems="center"
				spacing={1.5}
				sx={{ py: 1.25, minWidth: 0 }}
			>
				<Box
					sx={{
						width: 32,
						height: 32,
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

				<Box sx={{ flex: 1, minWidth: 0 }}>
					<Typography variant="body2" fontWeight={600} noWrap title={title}>
						{title}
					</Typography>

					<Typography
						variant="caption"
						color="text.secondary"
						noWrap
						display="block"
						title={device}
					>
						{device}
					</Typography>
				</Box>

				<Typography
					variant="caption"
					color="text.secondary"
					sx={{
						flexShrink: 0,
						whiteSpace: "nowrap",
						fontSize: "0.7rem",
					}}
				>
					{timestamp}
				</Typography>
			</Stack>

			{!last && <Divider sx={{ ml: 5.5, opacity: 0.6 }} />}
		</>
	);
};

export default ActivityItem;
