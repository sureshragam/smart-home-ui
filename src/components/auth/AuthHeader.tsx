import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

interface AuthHeaderProps {
	title: string;
	subtitle: string;
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
	return (
		<Box
			sx={{
				textAlign: "center",
				mb: 4,
			}}
		>
			<HomeIcon
				color="primary"
				sx={{
					fontSize: 52,
					mb: 1,
				}}
			/>

			<Typography variant="h5" fontWeight={700} gutterBottom>
				Smart Home IoT
			</Typography>

			<Typography variant="h6" fontWeight={600}>
				{title}
			</Typography>

			<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
				{subtitle}
			</Typography>
		</Box>
	);
};

export default AuthHeader;
