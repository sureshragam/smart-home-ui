import { Box, Stack } from "@mui/material";

import AnimatedBackground from "./components/AnimatedBackground";
import EnvironmentSection from "./components/EnvironmentSection";
import HeaderSection from "./components/HeaderSection";

import useDisplayData from "./hooks/useDisplayData";
import SystemStatusBar from "./components/SystemStatusBar";
import { useDevicesData } from "../../hooks/useDevicesData";

const DisplayPage = () => {
	const display = useDisplayData();
	const { data: devices } = useDevicesData();
	const esp32 = devices?.find((device) => device.type === "ESP32");
	return (
		<AnimatedBackground>
			<Box
				sx={{
					minHeight: "100vh",
					width: "100%",
					color: "common.white",

					px: {
						xs: 3,
						sm: 4,
						md: 6,
						lg: 8,
					},

					py: {
						xs: 3,
						sm: 4,
						md: 5,
						lg: 6,
					},
				}}
			>
				<Box
					sx={{
						maxWidth: 1400,
						height: "100%",
						mx: "auto",

						opacity: 0,
						animation: "fadeIn 1.2s ease forwards",

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
					<Stack
						sx={{
							minHeight: "vh",
						}}
					>
						{/* Header */}
						<HeaderSection display={display} />

						{/* Space between header and environment */}
						<Box
							sx={{
								height: {
									xs: 48,
									sm: 64,
									md: 80,
									lg: 100,
								},
							}}
						/>

						{/* Environment */}
						<EnvironmentSection display={display} />

						<SystemStatusBar
							esp32Online={esp32?.status === "ONLINE"}
							wifiStrength={esp32?.wifiStrength ?? 0}
							lastSeen={esp32?.lastSeen}
						/>
					</Stack>
				</Box>
			</Box>
		</AnimatedBackground>
	);
};

export default DisplayPage;
