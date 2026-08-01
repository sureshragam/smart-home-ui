import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { useMemo } from "react";

interface Props {
	children: ReactNode;
}

const AnimatedBackground = ({ children }: Props) => {
	const hour = new Date().getHours();

	const gradient = useMemo(() => {
		// 🌅 Morning
		if (hour >= 5 && hour < 10) {
			return `
				linear-gradient(
					135deg,
					#F6D365 0%,
					#FDA085 45%,
					#84FAB0 100%
				)
			`;
		}

		// ☀️ Day
		if (hour >= 10 && hour < 17) {
			return `
				linear-gradient(
					135deg,
					#4FACFE 0%,
					#00C6FB 50%,
					#43E97B 100%
				)
			`;
		}

		// 🌇 Evening
		if (hour >= 17 && hour < 19) {
			return `
				linear-gradient(
					135deg,
					#8E2DE2 0%,
					#FF6A88 55%,
					#FFB86C 100%
				)
			`;
		}

		// 🌙 Night
		return `
			linear-gradient(
				135deg,
				#0F2027 0%,
				#203A43 45%,
				#2C5364 100%
			)
		`;
	}, [hour]);

	return (
		<Box
			sx={{
				position: "fixed",
				inset: 0,

				overflow: "hidden",

				background: gradient,

				transition: "background 6s ease-in-out",

				"&::before": {
					content: '""',

					position: "absolute",

					top: "-25%",
					left: "-15%",

					width: "60vw",
					height: "60vw",

					borderRadius: "50%",

					background:
						"radial-gradient(circle, rgba(255,255,255,.14) 0%, rgba(255,255,255,0) 70%)",

					filter: "blur(70px)",

					animation: "ambientGlow 18s ease-in-out infinite alternate",

					pointerEvents: "none",
				},

				"&::after": {
					content: '""',

					position: "absolute",

					bottom: "-20%",
					right: "-15%",

					width: "50vw",
					height: "50vw",

					borderRadius: "50%",

					background:
						"radial-gradient(circle, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 70%)",

					filter: "blur(80px)",

					animation: "ambientGlowReverse 22s ease-in-out infinite alternate",

					pointerEvents: "none",
				},

				"@keyframes ambientGlow": {
					from: {
						transform: "translate(0px,0px) scale(1)",
					},
					to: {
						transform: "translate(50px,35px) scale(1.18)",
					},
				},

				"@keyframes ambientGlowReverse": {
					from: {
						transform: "translate(0px,0px) scale(1)",
					},
					to: {
						transform: "translate(-40px,-30px) scale(1.15)",
					},
				},
			}}
		>
			<Box
				sx={{
					position: "relative",
					zIndex: 1,
					width: "100%",
					height: "100%",
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default AnimatedBackground;
