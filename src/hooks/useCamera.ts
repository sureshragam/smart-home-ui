import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { captureImage, getCameraStatus, switchCamera } from "../api/cameraApi";

export function useCamera(deviceCode: string) {
	const queryClient = useQueryClient();

	const status = useQuery({
		queryKey: ["camera", deviceCode],
		queryFn: () => getCameraStatus(deviceCode),
		refetchInterval: 3000,
		enabled: !!deviceCode,
	});

	const capture = useMutation({
		mutationFn: () => captureImage(deviceCode),
	});

	const cameraSwitch = useMutation({
		mutationFn: () => switchCamera(deviceCode),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["camera", deviceCode],
			});
		},
	});

	return {
		status,
		capture,
		cameraSwitch,
	};
}
