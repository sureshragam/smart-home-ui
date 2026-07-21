import { Stack } from "@mui/material";

import CameraControls from "./CameraControls";
import CameraStatus from "./CameraStatus";
import CameraStream from "./CameraStream";

import { useCamera } from "../../hooks/useCamera";

interface Props {
	deviceCode: string;
}

export default function CameraCard({ deviceCode }: Readonly<Props>) {
	const { status, capture, cameraSwitch } = useCamera(deviceCode);

	return (
		<Stack spacing={2}>
			<CameraStream deviceCode={deviceCode} />

			<CameraStatus status={status.data} />

			<CameraControls
				captureLoading={capture.isPending}
				switchLoading={cameraSwitch.isPending}
				onCapture={() => capture.mutate()}
				onSwitch={() => cameraSwitch.mutate()}
			/>
		</Stack>
	);
}
