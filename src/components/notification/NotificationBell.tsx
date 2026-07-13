import { useState } from "react";

import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

import { Badge, IconButton, Tooltip } from "@mui/material";

import NotificationPopover from "./NotificationPopover";

import { useUnreadNotificationCount } from "../../hooks/useNotifications";

const NotificationBell = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const open = Boolean(anchorEl);

	const { data: unreadCount = 0 } = useUnreadNotificationCount();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		if (anchorEl) {
			setAnchorEl(null);
			return;
		}

		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title="Notifications">
				<IconButton
					color="inherit"
					aria-label="notifications"
					onClick={handleClick}
				>
					<Badge
						badgeContent={unreadCount}
						color="error"
						invisible={unreadCount === 0}
						max={99}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
					>
						<NotificationsRoundedIcon />
					</Badge>
				</IconButton>
			</Tooltip>

			<NotificationPopover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
			/>
		</>
	);
};

export default NotificationBell;
