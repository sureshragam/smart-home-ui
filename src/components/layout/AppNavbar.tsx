import { useState } from "react";

import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { logout } from "../../api/authApi";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "./ThemeToggle";
import ProfileMenu from "./ProfileMenu";

import NotificationBell from "../notification/NotificationBell";

const settings = [
	{ label: "Profile", action: "profile" },
	{ label: "Logout", action: "logout" },
];

const AppNavbar = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const navigate = useNavigate();

	const queryClient = useQueryClient();

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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
					navigate("/login", {
						replace: true,
					});
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
				backgroundColor: "rgba(18,18,18,0.80)",
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
					{/* Mobile Drawer Button */}

					<MobileDrawer />

					{/* Logo */}

					<Logo />

					{/* Desktop Navigation */}

					<Box
						sx={{
							ml: 6,
							display: {
								xs: "none",
								md: "block",
							},
						}}
					>
						<NavLinks />
					</Box>

					<Box sx={{ flexGrow: 1 }} />

					{/* Notification */}

					<NotificationBell />

					{/* Hide Theme Toggle on Mobile */}

					<Box
						sx={{
							display: {
								xs: "none",
								sm: "block",
							},
						}}
					>
						<ThemeToggle />
					</Box>

					{/* Profile */}

					<Box sx={{ ml: 1 }}>
						<IconButton
							onClick={handleOpenUserMenu}
							sx={{
								p: 0,
							}}
						>
							<ProfileMenu />
						</IconButton>
					</Box>

					<Menu
						anchorEl={anchorElUser}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						sx={{
							mt: 1,
						}}
					>
						{settings.map((setting) => (
							<MenuItem
								key={setting.action}
								onClick={() => handleMenuClick(setting.action)}
							>
								<Typography>{setting.label}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default AppNavbar;
