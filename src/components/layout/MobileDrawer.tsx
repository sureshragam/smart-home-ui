import { useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import { navLinks } from "../../constants/navigation";

const drawerWidth = 320;

const MobileDrawer = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen((previous) => !previous);
	};

	return (
		<>
			<IconButton
				color="inherit"
				onClick={toggleDrawer}
				sx={{
					display: {
						xs: "flex",
						md: "none",
					},
					mr: 1,
				}}
			>
				<MenuRoundedIcon />
			</IconButton>

			<Drawer
				variant="temporary"
				open={open}
				onClose={toggleDrawer}
				sx={{
					display: {
						xs: "block",
						md: "none",
					},
					"& .MuiDrawer-paper": {
						width: drawerWidth,
					},
				}}
			>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Box p={3}>
						<Logo />
					</Box>

					<Divider />

					<List
						sx={{
							flexGrow: 1,
							py: 1,
						}}
					>
						{navLinks.map((link) => {
							const Icon = link.icon;

							return (
								<ListItemButton
									key={link.path}
									component={NavLink}
									to={link.path}
									onClick={toggleDrawer}
									sx={{
										mx: 1,
										my: 0.5,
										borderRadius: 2,

										"&.active": {
											backgroundColor: "primary.main",
											color: "#fff",

											"& .MuiListItemIcon-root": {
												color: "#fff",
											},

											"& .MuiListItemText-primary": {
												fontWeight: 700,
											},
										},
									}}
								>
									<ListItemIcon>
										<Icon />
									</ListItemIcon>

									<ListItemText primary={link.label} />
								</ListItemButton>
							);
						})}
					</List>

					<Divider />

					<Box p={2}>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<Typography fontWeight={600}>Theme</Typography>

							<ThemeToggle />
						</Stack>
					</Box>
				</Box>
			</Drawer>
		</>
	);
};

export default MobileDrawer;
