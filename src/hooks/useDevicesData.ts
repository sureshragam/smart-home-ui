import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKeys";

import { getDevices } from "../api/deviceApi";

export const useDevicesData = () => {
	return useQuery({
		queryKey: QUERY_KEYS.devices,
		queryFn: getDevices,
	});
};
