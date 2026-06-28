import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Box, Typography } from "@mui/material";

const Logo = () => {
	return (
		<Box display="flex" alignItems="center" gap={2}>
			<Box
				sx={{
					width: 48,
					height: 48,
					borderRadius: 3,
					backgroundColor: "primary.main",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#fff",
				}}
			>
				<HomeRoundedIcon />
			</Box>

			<Box>
				<Typography variant="h6" fontWeight={700}>
					Smart Home
				</Typography>

				<Typography variant="caption" color="text.secondary">
					IoT Dashboard
				</Typography>
			</Box>
		</Box>
	);
};

export default Logo;
