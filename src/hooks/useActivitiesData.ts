import { useQuery } from "@tanstack/react-query";

import { getActivities } from "../api/activityApi";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useActivitiesData = () =>
	useQuery({
		queryKey: QUERY_KEYS.activities,
		queryFn: getActivities,
	});
