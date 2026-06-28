import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import AppNavbar from "../components/layout/AppNavbar";

const AppLayout = () => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				backgroundColor: "background.default",
			}}
		>
			<AppNavbar />

			<Container
				maxWidth="xl"
				sx={{
					mt: 4,
					mb: 4,
				}}
			>
				<Outlet />
			</Container>
		</Box>
	);
};

export default AppLayout;
