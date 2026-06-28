import { Avatar } from "@mui/material";

const ProfileMenu = () => {
	return (
		<Avatar
			sx={{
				width: 40,
				height: 40,
				bgcolor: "primary.main",
				fontWeight: 700,
				cursor: "pointer",

				"&:hover": {
					opacity: 0.9,
				},
			}}
		>
			S
		</Avatar>
	);
};

export default ProfileMenu;
