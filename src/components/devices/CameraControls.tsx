import { Alert } from "@mui/material";

export default function CameraControls() {
	return (
		<Alert severity="info">
			Camera controls are available only when the dashboard is on the same local
			network as the camera device.
		</Alert>
	);
}
