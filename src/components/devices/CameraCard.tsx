import { Stack } from "@mui/material";

import CameraControls from "./CameraControls";
import CameraStream from "./CameraStream";

interface Props {
	deviceCode: string;
}

export default function CameraCard({ deviceCode }: Readonly<Props>) {
	return (
		<Stack spacing={2}>
			<CameraStream deviceCode={deviceCode} />
			<CameraControls />
		</Stack>
	);
}
