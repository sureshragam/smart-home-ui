import { Card, CardContent } from "@mui/material";

import { getStreamUrl } from "../../api/cameraApi";

interface Props {
	deviceCode: string;
}

export default function CameraStream({ deviceCode }: Readonly<Props>) {
	return (
		<Card>
			<CardContent>
				<img
					src={getStreamUrl(deviceCode)}
					alt="Camera Stream"
					style={{
						width: "100%",
						borderRadius: 8,
						display: "block",
					}}
				/>
			</CardContent>
		</Card>
	);
}
