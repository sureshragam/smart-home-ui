import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

import {
	Box,
	CircularProgress,
	Divider,
	Popover,
	Stack,
	Typography,
} from "@mui/material";

import NotificationItem from "./NotificationItem";

import {
	useNotifications,
	useUnreadNotificationCount,
} from "../../hooks/useNotifications";
import { useMarkAllNotificationsAsRead } from "../../hooks/useNotificationMutations";

interface Props {
	open: boolean;
	anchorEl: HTMLElement | null;
	onClose: () => void;
}

const NotificationPopover = ({ open, anchorEl, onClose }: Props) => {
	const { data: notifications = [], isLoading } = useNotifications();

	const { data: unreadCount = 0 } = useUnreadNotificationCount();

	const { mutate: markAllAsRead, isPending } = useMarkAllNotificationsAsRead();

	const handleMarkAllAsRead = () => {
		if (unreadCount > 0 && !isPending) {
			markAllAsRead();
		}
	};

	const renderNotificationContent = () => {
		if (isLoading) {
			return (
				<Box
					height={220}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					gap={2}
				>
					<CircularProgress size={28} />

					<Typography color="text.secondary" variant="body2">
						Loading notifications...
					</Typography>
				</Box>
			);
		}

		if (notifications.length === 0) {
			return (
				<Box
					height={220}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					gap={1}
				>
					<NotificationsRoundedIcon
						sx={{
							fontSize: 48,
							color: "text.disabled",
						}}
					/>

					<Typography fontWeight={600}>You're all caught up</Typography>

					<Typography variant="body2" color="text.secondary">
						No notifications available.
					</Typography>
				</Box>
			);
		}

		return (
			<Stack spacing={2}>
				{notifications.map((notification) => (
					<NotificationItem key={notification.id} notification={notification} />
				))}
			</Stack>
		);
	};

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			slotProps={{
				paper: {
					sx: {
						width: 420,
						minWidth: 420,
						maxHeight: 520,
						mt: 1,
						borderRadius: 3,
						overflow: "hidden",
					},
				},
			}}
		>
			{/* Header */}

			<Box px={2.5} py={2}>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography variant="h6" fontWeight={700}>
						Notifications ({notifications.length})
					</Typography>

					{unreadCount > 0 && (
						<Typography
							color="primary"
							fontWeight={600}
							sx={{
								cursor: "pointer",
								userSelect: "none",
							}}
							onClick={handleMarkAllAsRead}
						>
							{isPending ? "Marking..." : "Mark all as read"}
						</Typography>
					)}
				</Stack>
			</Box>

			<Divider />

			{/* Body */}

			<Box
				sx={{
					maxHeight: 380,
					overflowY: "auto",
					p: 2,

					"&::-webkit-scrollbar": {
						width: 6,
					},

					"&::-webkit-scrollbar-thumb": {
						borderRadius: 10,
						backgroundColor: "rgba(255,255,255,0.20)",
					},

					"&::-webkit-scrollbar-track": {
						background: "transparent",
					},
				}}
			>
				{renderNotificationContent()}
			</Box>

			{/* Footer */}

			{notifications.length > 0 && (
				<>
					<Divider />

					<Box
						py={2}
						textAlign="center"
						sx={{
							cursor: "pointer",
							transition: "0.2s",

							"&:hover": {
								backgroundColor: "action.hover",
							},
						}}
					>
						<Typography color="primary" fontWeight={600}>
							View All Notifications
						</Typography>
					</Box>
				</>
			)}
		</Popover>
	);
};

export default NotificationPopover;
