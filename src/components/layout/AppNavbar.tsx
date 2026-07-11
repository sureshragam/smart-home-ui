import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NotificationBell from "./NotificationBell";
import ProfileMenu from "./ProfileMenu";
import ThemeToggle from "./ThemeToggle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { logout } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const AppNavbar = () => {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const settings = [
		{ label: "Profile", action: "profile" },
		{ label: "Logout", action: "logout" },
	];

	const handleMenuClick = async (action: string) => {
		handleCloseUserMenu();

		switch (action) {
			case "profile":
				navigate("/profile");
				break;

			case "logout":
				try {
					await logout();
				} finally {
					queryClient.clear();
					navigate("/login", { replace: true });
				}
				break;

			default:
				break;
		}
	};
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
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<ProfileMenu />
						</IconButton>
					</Box>
					<Menu
						sx={{ mt: "45px" }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem
								key={setting.action}
								onClick={() => handleMenuClick(setting.action)}
							>
								<Typography sx={{ textAlign: "center" }}>
									{setting.label}
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default AppNavbar;
