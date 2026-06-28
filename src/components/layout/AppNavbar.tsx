import { AppBar, Box, Container, Toolbar } from "@mui/material";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NotificationBell from "./NotificationBell";
import ProfileMenu from "./ProfileMenu";
import ThemeToggle from "./ThemeToggle";

const AppNavbar = () => {
	return (
		<AppBar
			position="sticky"
			elevation={0}
			color="transparent"
			sx={{
				backdropFilter: "blur(16px)",
				backgroundColor: "rgba(18,18,18,0.8)",
				borderBottom: "1px solid",
				borderColor: "divider",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						minHeight: 72,
					}}
				>
					<Logo />

					<Box sx={{ ml: 6 }}>
						<NavLinks />
					</Box>

					<Box sx={{ flexGrow: 1 }} />

					<NotificationBell />

					<ThemeToggle />

					<Box sx={{ ml: 1 }}>
						<ProfileMenu />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default AppNavbar;
