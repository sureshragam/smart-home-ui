import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { useMemo } from "react";

interface Props {
	children: ReactNode;
}

const AnimatedBackground = ({ children }: Props) => {
	const hour = new Date().getHours();

	const gradient = useMemo(() => {
		if (hour >= 5 && hour < 10)
			return "linear-gradient(135deg,#FDBB2D 0%,#22C1C3 100%)";

		if (hour >= 10 && hour < 17)
			return "linear-gradient(135deg,#4FACFE 0%,#00F2FE 100%)";

		if (hour >= 17 && hour < 19)
			return "linear-gradient(135deg,#8E2DE2 0%,#FF6A88 100%)";

		return "linear-gradient(135deg,#141E30 0%,#243B55 100%)";
	}, [hour]);

	return (
		<Box
			sx={{
				width: "100vw",
				height: "100vh",

				background: gradient,

				transition: "background 2s ease",

				overflow: "hidden",
			}}
		>
			{children}
		</Box>
	);
};

export default AnimatedBackground;
