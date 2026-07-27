import { Box } from "@mui/material";

import HeaderSection from "./components/HeaderSection";
import MetricsSection from "./components/MetricSection";
import AnimatedBackground from "./components/AnimatedBackground";

const DisplayPage = () => {
	return (
		<AnimatedBackground>
			<Box
				sx={{
					width: "100vw",
					height: "100vh",

					display: "flex",
					flexDirection: "column",

					justifyContent: "space-between",

					p: 6,

					color: "white",
				}}
			>
				<HeaderSection />

				<MetricsSection />

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						opacity: 0.75,
						fontSize: 18,
					}}
				>
					<span>Last Updated</span>

					<span>09:42:16 AM</span>
				</Box>
			</Box>
		</AnimatedBackground>
	);
};

export default DisplayPage;
