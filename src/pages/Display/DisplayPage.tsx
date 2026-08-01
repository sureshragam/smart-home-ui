import { Box, Typography } from "@mui/material";

export default function DisplayPage() {
	return (
		<Box
			sx={{
				position: "fixed",
				inset: 0,
				backgroundColor: "red",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography variant="h2" color="white">
				Hello
			</Typography>
		</Box>
	);
}
