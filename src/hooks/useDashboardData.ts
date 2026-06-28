import { useQuery } from "@tanstack/react-query";

import { getDashboard } from "../api/dashboardApi";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useDashboardData = () => {
	return useQuery({
		queryKey: QUERY_KEYS.dashboard,
		queryFn: getDashboard,
	});
};
