import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import { Box, Stack, Typography } from "@mui/material";

const HeaderSection = () => {
	return (
		<Box display="flex" justifyContent="space-between" alignItems="flex-start">
			<Stack spacing={0.5}>
				<Typography fontSize={36} fontWeight={600}>
					Monday
				</Typography>

				<Typography fontSize={22}>27 July 2026</Typography>

				<Typography fontSize={48} fontWeight={300}>
					09:42 AM
				</Typography>
			</Stack>

			<Stack alignItems="center" spacing={1}>
				<HomeRoundedIcon
					sx={{
						fontSize: 48,
					}}
				/>

				<Typography fontSize={120} fontWeight={200} lineHeight={1}>
					28°
				</Typography>

				<Typography fontSize={30} fontWeight={600}>
					Comfortable
				</Typography>

				<Typography fontSize={22}>Living Room</Typography>
			</Stack>
		</Box>
	);
};

export default HeaderSection;
