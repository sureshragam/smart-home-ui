import { Box, Stack } from "@mui/material";

import AnimatedBackground from "./components/AnimatedBackground";
import EnvironmentSection from "./components/EnvironmentSection";
import HeaderSection from "./components/HeaderSection";

import useDisplayData from "./hooks/useDisplayData";

const DisplayPage = () => {
	const display = useDisplayData();

	return (
		<AnimatedBackground>
			<Box
				sx={{
					minHeight: "100dvh",
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
					}}
				>
					<Stack
						sx={{
							minHeight: "100dvh",
						}}
					>
						{/* Header */}
						<HeaderSection display={display} />

						{/* Spacer */}
						<Box flex={1} />

						{/* Environment */}
						<EnvironmentSection display={display} />

						{/* Spacer */}
						<Box flex={1} />
					</Stack>
				</Box>
			</Box>
		</AnimatedBackground>
	);
};

export default DisplayPage;
