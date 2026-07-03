import { Card, CardContent, Typography, Stack } from "@mui/material";
import type { ReactNode } from "react";

interface DeviceSummaryCardProps {
	title: string;
	value: number;
	icon: ReactNode;
	color: string;
}

const DeviceSummaryCard = ({
	title,
	value,
	icon,
	color,
}: DeviceSummaryCardProps) => {
	return (
		<Card
			elevation={0}
			sx={{
				borderRadius: 4,
				border: "1px solid",
				borderColor: "divider",
				height: "100%",
			}}
		>
			<CardContent>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<div>
						<Typography variant="body2" color="text.secondary">
							{title}
						</Typography>

						<Typography variant="h4" fontWeight={700} mt={1}>
							{value}
						</Typography>
					</div>

					<Stack
						sx={{
							width: 52,
							height: 52,
							borderRadius: "50%",
							backgroundColor: color,
							alignItems: "center",
							justifyContent: "center",
							color: "white",
						}}
					>
						{icon}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default DeviceSummaryCard;
