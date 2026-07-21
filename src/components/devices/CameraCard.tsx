import { Stack } from "@mui/material";

import CameraStream from "./CameraStream";

import { DeviceResponse } from "../../types/api/device";

interface Props {
	device: DeviceResponse;
}

export default function CameraCard({ device }: Readonly<Props>) {
	return (
		<Stack spacing={2}>
			<CameraStream device={device} />
		</Stack>
	);
}
