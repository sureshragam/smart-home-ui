import type { ReactNode } from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";

interface SummaryCardProps {
	title: string;
	value: string;
	subtitle: string;
	icon: ReactNode;
	iconColor?: string;
}

const SummaryCard = ({
	title,
	value,
	subtitle,
	icon,
	iconColor = "#1976d2",
}: SummaryCardProps) => {
	return (
		<Card
			elevation={0}
			sx={{
				height: "100%",
				borderRadius: 4,
				border: "1px solid",
				borderColor: "divider",
				cursor: "pointer",
				overflow: "hidden",
				transition: "all 0.25s ease",

				"&:hover": {
					transform: "translateY(-4px)",
					boxShadow: 4,
				},
			}}
		>
			<CardContent sx={{ p: 3 }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					<Box>
						<Typography variant="body2" color="text.secondary">
							{title}
						</Typography>

						<Typography
							variant="h4"
							fontWeight={700}
							sx={{
								mt: 1,
								lineHeight: 1.1,
							}}
						>
							{value}
						</Typography>

						<Typography
							variant="caption"
							color="text.secondary"
							sx={{
								mt: 1,
								display: "block",
							}}
						>
							{subtitle}
						</Typography>
					</Box>

					<Box
						sx={{
							width: 56,
							height: 56,
							borderRadius: 3,
							backgroundColor: `${iconColor}20`,
							color: iconColor,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0,
						}}
					>
						{icon}
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default SummaryCard;
