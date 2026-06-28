import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import { Box, Paper, Stack, Typography } from "@mui/material";

interface HealthMetricProps {
	label: string;
	value: string;
	status: "success" | "warning" | "error" | "info" | "neutral";
}

const statusConfig = {
	success: {
		icon: <CheckCircleRoundedIcon fontSize="small" />,
		color: "#22c55e",
	},
	warning: {
		icon: <InfoRoundedIcon fontSize="small" />,
		color: "#f59e0b",
	},
	error: {
		icon: <ErrorRoundedIcon fontSize="small" />,
		color: "#ef4444",
	},
	info: {
		icon: <InfoRoundedIcon fontSize="small" />,
		color: "#3b82f6",
	},
	neutral: {
		icon: <RemoveCircleOutlineRoundedIcon fontSize="small" />,
		color: "#64748b",
	},
} as const;

const HealthMetric = ({ label, value, status }: HealthMetricProps) => {
	const config = statusConfig[status];

	return (
		<Paper
			elevation={0}
			sx={{
				p: 2.5,
				borderRadius: 3,
				border: "1px solid",
				borderColor: "divider",
				height: "100%",
				transition: "all 0.2s ease",

				"&:hover": {
					boxShadow: 2,
					transform: "translateY(-2px)",
				},
			}}
		>
			<Stack direction="row" spacing={2} alignItems="center">
				<Box
					sx={{
						width: 40,
						height: 40,
						borderRadius: 2,
						backgroundColor: `${config.color}20`,
						color: config.color,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexShrink: 0,
					}}
				>
					{config.icon}
				</Box>

				<Box>
					<Typography variant="body2" color="text.secondary">
						{label}
					</Typography>

					<Typography fontWeight={600} sx={{ mt: 0.5 }}>
						{value}
					</Typography>
				</Box>
			</Stack>
		</Paper>
	);
};

export default HealthMetric;
