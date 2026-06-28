import { Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
	{ label: "Dashboard", path: "/" },
	{ label: "Devices", path: "/devices" },
	{ label: "Automations", path: "/automations" },
	{ label: "Analytics", path: "/analytics" },
	{ label: "Settings", path: "/settings" },
];

const NavLinks = () => {
	return (
		<Stack direction="row" spacing={1}>
			{links.map((link) => (
				<Button
					key={link.path}
					component={NavLink}
					to={link.path}
					color="inherit"
					sx={{
						borderRadius: 2,
						textTransform: "none",
						fontWeight: 600,
						px: 2,
						py: 1,
						transition: "0.2s",

						"&.active": {
							backgroundColor: "primary.main",
							color: "#fff",
						},

						"&:hover": {
							backgroundColor: "action.hover",
						},
					}}
				>
					{link.label}
				</Button>
			))}
		</Stack>
	);
};

export default NavLinks;
