import { useQuery } from "@tanstack/react-query";

import { getHealth } from "../api/healthApi";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useHealthData = () =>
	useQuery({
		queryKey: QUERY_KEYS.health,
		queryFn: getHealth,
	});
