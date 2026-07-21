import { Button, CircularProgress, Stack } from "@mui/material";

interface Props {
	onCapture: () => void;
	onSwitch: () => void;
	captureLoading: boolean;
	switchLoading: boolean;
}

export default function CameraControls({
	onCapture,
	onSwitch,
	captureLoading,
	switchLoading,
}: Readonly<Props>) {
	return (
		<Stack direction="row" spacing={2}>
			<Button
				variant="contained"
				onClick={onCapture}
				disabled={captureLoading}
				startIcon={
					captureLoading ? (
						<CircularProgress size={18} color="inherit" />
					) : undefined
				}
			>
				Capture
			</Button>

			<Button
				variant="outlined"
				onClick={onSwitch}
				disabled={switchLoading}
				startIcon={
					switchLoading ? (
						<CircularProgress size={18} color="inherit" />
					) : undefined
				}
			>
				Switch Camera
			</Button>
		</Stack>
	);
}
