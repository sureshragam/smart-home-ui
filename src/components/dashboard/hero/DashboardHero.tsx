import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import { Box, Chip, Stack, Typography } from "@mui/material";

const DashboardHero = ({ isSystemHealthy = true }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				mb: 5,
			}}
		>
			<Stack spacing={1}>
				<Stack direction="row" spacing={1} alignItems="center">
					<Typography variant="h4" fontWeight={700}>
						Welcome back, Suresh
					</Typography>

					<WavingHandRoundedIcon color="warning" fontSize="large" />
				</Stack>

				<Typography color="text.secondary" variant="body1">
					Here's what's happening with your smart home today.
				</Typography>
			</Stack>

			<Chip
				icon={<FavoriteRoundedIcon />}
				label={isSystemHealthy ? "System Healthy" : "System Unhealthy"}
				color={isSystemHealthy ? "success" : "error"}
			/>
		</Box>
	);
};

export default DashboardHero;
