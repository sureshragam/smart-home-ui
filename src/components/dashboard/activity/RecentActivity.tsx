import { Box, Card, CardContent, Typography } from "@mui/material";

import type { ActivityResponse } from "../../../types/api/activity";
import { mapActivitiesToItems } from "../../../mappers/activityMapper";

import ActivityItem from "./ActivityItem";

interface RecentActivityProps {
	activities: ActivityResponse[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
	const activityItems = mapActivitiesToItems(activities).slice(0, 3);

	return (
		<Card
			elevation={0}
			sx={{
				borderRadius: 4,
				border: "1px solid",
				borderColor: "divider",
				height: "fit-content",
				alignSelf: "start",
			}}
		>
			<CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						mb: 1.5,
					}}
				>
					<Typography variant="h6" fontWeight={600}>
						Recent Activity
					</Typography>

					<Typography variant="caption" color="text.secondary">
						Latest 3
					</Typography>
				</Box>

				{activityItems.length > 0 ? (
					activityItems.map((activity, index) => (
						<ActivityItem
							key={activity.id}
							{...activity}
							last={index === activityItems.length - 1}
						/>
					))
				) : (
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ py: 3, textAlign: "center" }}
					>
						No recent activities
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};

export default RecentActivity;
