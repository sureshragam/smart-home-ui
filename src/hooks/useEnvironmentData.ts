import { useQuery } from "@tanstack/react-query";
import { getEnvironment } from "../api/environmentApi";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useEnvironmentData = () => {
	return useQuery({
		queryKey: QUERY_KEYS.environment,
		queryFn: getEnvironment,
	});
};
