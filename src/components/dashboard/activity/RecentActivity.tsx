import { Card, CardContent, Typography } from "@mui/material";

import type { ActivityResponse } from "../../../types/api/activity";
import { mapActivitiesToItems } from "../../../mappers/activityMapper";

import ActivityItem from "./ActivityItem";

interface RecentActivityProps {
	activities: ActivityResponse[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
	const activityItems = mapActivitiesToItems(activities);

	return (
		<Card
			elevation={0}
			sx={{
				borderRadius: 4,
				border: "1px solid",
				borderColor: "divider",
				height: "100%",
			}}
		>
			<CardContent>
				<Typography variant="h6" fontWeight={600} mb={2}>
					Recent Activity
				</Typography>

				{activityItems.map((activity, index) => (
					<ActivityItem
						key={activity.id}
						{...activity}
						last={index === activityItems.length - 1}
					/>
				))}
			</CardContent>
		</Card>
	);
};

export default RecentActivity;
