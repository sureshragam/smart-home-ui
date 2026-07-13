import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import { Avatar, Box, Chip, Paper, Stack, Typography } from "@mui/material";

import type { NotificationResponse } from "../../types/api/notification";
import { useMarkNotificationAsRead } from "../../hooks/useNotificationMutations";

dayjs.extend(relativeTime);

interface Props {
	notification: NotificationResponse;
}

const NotificationItem = ({ notification }: Props) => {
	const { mutate, isPending } = useMarkNotificationAsRead();

	const getColor = () => {
		switch (notification.priority) {
			case "CRITICAL":
				return "error" as const;

			case "HIGH":
				return "warning" as const;

			case "MEDIUM":
				return "info" as const;

			default:
				return "success" as const;
		}
	};

	const getIcon = () => {
		switch (notification.priority) {
			case "CRITICAL":
				return <ErrorRoundedIcon />;

			case "HIGH":
				return <WarningAmberRoundedIcon />;

			default:
				return <NotificationsActiveRoundedIcon />;
		}
	};

	const color = getColor();

	const handleClick = () => {
		if (notification.status === "UNREAD" && !isPending) {
			mutate(notification.id);
		}
	};

	return (
		<Paper
			elevation={0}
			onClick={handleClick}
			sx={{
				p: 2,
				borderRadius: 2,
				cursor: "pointer",
				border: "1px solid",
				borderColor: "divider",
				backgroundColor:
					notification.status === "UNREAD"
						? "action.selected"
						: "background.paper",
				transition: "all 0.2s ease",

				"&:hover": {
					backgroundColor: "action.hover",
					transform: "translateY(-1px)",
				},
			}}
		>
			<Stack direction="row" spacing={2}>
				<Avatar
					sx={{
						bgcolor: `${color}.main`,
						width: 42,
						height: 42,
					}}
				>
					{getIcon()}
				</Avatar>

				<Box
					sx={{
						flex: 1,
						minWidth: 0,
					}}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={1}
					>
						<Typography fontWeight={700} noWrap>
							{notification.title}
						</Typography>

						<Chip label={notification.priority} color={color} size="small" />
					</Stack>

					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							mt: 0.5,
							wordBreak: "break-word",
						}}
					>
						{notification.message}
					</Typography>

					<Typography
						variant="caption"
						color="text.secondary"
						sx={{
							display: "block",
							mt: 1,
						}}
					>
						{dayjs(notification.notificationTime).fromNow()}
					</Typography>
				</Box>
			</Stack>
		</Paper>
	);
};

export default NotificationItem;
