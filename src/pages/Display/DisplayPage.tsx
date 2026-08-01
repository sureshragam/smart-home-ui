import { Box } from "@mui/material";

import AnimatedBackground from "./components/AnimatedBackground";
import EnvironmentSection from "./components/EnvironmentSection";
import HeaderSection from "./components/HeaderSection";
import SystemStatusBar from "./components/SystemStatusBar";

import useDisplayData from "./hooks/useDisplayData";
import { useDevicesData } from "../../hooks/useDevicesData";

const DisplayPage = () => {
	const display = useDisplayData();

	const { data: devices } = useDevicesData();

	const esp32 = devices?.find((device) => device.type === "ESP32");

	return (
		<AnimatedBackground>
			<Box
				sx={{
					position: "fixed",
					inset: 0,

					color: "common.white",

					display: "flex",
					justifyContent: "center",

					overflow: "hidden",

					px: 4,
					py: 3,
				}}
			>
				<Box
					sx={{
						width: "100%",
						maxWidth: 1400,

						display: "flex",
						flexDirection: "column",

						opacity: 0,
						animation: "fadeIn 0.8s ease forwards",

						"@keyframes fadeIn": {
							from: {
								opacity: 0,
								transform: "translateY(20px)",
							},
							to: {
								opacity: 1,
								transform: "translateY(0)",
							},
						},
					}}
				>
					<HeaderSection display={display} />

					<Box sx={{ flex: 1, minHeight: 20 }} />

					<EnvironmentSection display={display} />

					<Box sx={{ flex: 1, minHeight: 20 }} />

					<SystemStatusBar
						esp32Online={esp32?.status === "ONLINE"}
						wifiStrength={esp32?.wifiStrength ?? 0}
						lastSeen={esp32?.lastSeen}
					/>
				</Box>
			</Box>
		</AnimatedBackground>
	);
};

export default DisplayPage;
