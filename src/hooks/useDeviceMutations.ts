import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKeys";

import { addDevice } from "../api/deviceApi";
import type { AddDeviceRequest, DeviceResponse } from "../types/api/device";

export const useDeviceMutations = () => {
	const queryClient = useQueryClient();

	const addDeviceMutation = useMutation<
		DeviceResponse,
		Error,
		AddDeviceRequest
	>({
		mutationFn: addDevice,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: QUERY_KEYS.devices,
			});
		},
	});

	return {
		addDeviceMutation,
	};
};
