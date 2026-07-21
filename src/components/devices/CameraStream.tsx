import { Alert } from "@mui/material";

import type { DeviceResponse } from "../../types/api/device";

interface Props {
	device: DeviceResponse;
}

export default function CameraStream({ device }: Readonly<Props>) {
	if (!device.ipAddress) {
		return (
			<Alert severity="warning">Device has not reported its IP address.</Alert>
		);
	}

	const streamUrl = `http://${device.ipAddress}:8081/stream`;

	return (
		<img
			src={streamUrl}
			alt="Camera Stream"
			style={{
				width: "100%",
				borderRadius: 8,
			}}
		/>
	);
}
