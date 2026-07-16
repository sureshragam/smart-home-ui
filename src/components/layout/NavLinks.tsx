import { Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../constants/navigation";

const NavLinks = () => {
	return (
		<Stack direction="row" spacing={1}>
			{navLinks.map((link) => {
				const Icon = link.icon;

				return (
					<Button
						key={link.path}
						component={NavLink}
						to={link.path}
						color="inherit"
						startIcon={<Icon />}
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
				);
			})}
		</Stack>
	);
};

export default NavLinks;
