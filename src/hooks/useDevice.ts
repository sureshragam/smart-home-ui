import { useQuery } from "@tanstack/react-query";

import { getDevice } from "../api/deviceApi";

export const useDevice = (deviceCode: string) => {
	return useQuery({
		queryKey: ["device", deviceCode],
		queryFn: () => getDevice(deviceCode),
		enabled: !!deviceCode,
		refetchInterval: 5000, // We'll replace with SSE later
	});
};
