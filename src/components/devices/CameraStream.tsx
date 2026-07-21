import { Alert } from "@mui/material";

interface Props {
	deviceCode: string;
}

export default function CameraStream({ deviceCode }: Readonly<Props>) {
	return (
		<Alert severity="info">
			Live camera streaming is available only on the local network.
			<br />
			Device: <strong>{deviceCode}</strong>
		</Alert>
	);
}
