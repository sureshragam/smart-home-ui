import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Badge, IconButton } from "@mui/material";

const NotificationBell = () => {
	return (
		<IconButton color="inherit">
			<Badge badgeContent={2} color="error">
				<NotificationsRoundedIcon />
			</Badge>
		</IconButton>
	);
};

export default NotificationBell;
