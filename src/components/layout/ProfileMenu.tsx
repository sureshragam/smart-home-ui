import { Avatar } from "@mui/material";
import { useState } from "react";

const ProfileMenu = () => {
	const [showProfile, setShowProfile] = useState(false);
	const handleProfile = () => {
		setShowProfile((prev) => !prev);
	};
	return (
		<Avatar
			onClick={handleProfile}
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
