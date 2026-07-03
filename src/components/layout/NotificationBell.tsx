import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Badge, IconButton } from "@mui/material";

const NotificationBell = () => {
	const notificationCount = 0;
	return (
		<IconButton color="inherit">
			<Badge
				badgeContent={notificationCount}
				color={notificationCount > 0 ? "error" : "success"}
			>
				<NotificationsRoundedIcon />
			</Badge>
		</IconButton>
	);
};

export default NotificationBell;
