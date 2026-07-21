import { Card, CardContent, Stack, Typography } from "@mui/material";

import type { CameraStatusResponse } from "../../types/api/camera";

interface Props {
	readonly status?: CameraStatusResponse;
}

export default function CameraStatus({ status }: Props) {
	if (!status) return null;

	return (
		<Card>
			<CardContent>
				<Stack spacing={1}>
					<Typography>Status : {status.status}</Typography>

					<Typography>Camera : {status.camera}</Typography>

					<Typography>
						Stream : {status.streamReady ? "Ready" : "Not Ready"}
					</Typography>

					<Typography>Frames : {status.frameCount}</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
}
