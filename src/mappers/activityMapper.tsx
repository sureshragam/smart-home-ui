import type { ActivityResponse } from "../types/api/activity";
import type { ActivityItemModel } from "../types/ui/activity";

export const mapActivitiesToItems = (
	activities: ActivityResponse[],
): ActivityItemModel[] =>
	activities.map((activity) => ({
		...activity,
		type:
			activity.type === "MOTION_DETECTED"
				? "motion"
				: activity.type === "MOTION_STOPPED"
					? "motion-end"
					: activity.type === "DEVICE_CONNECTED"
						? "device"
						: "system",
	}));
