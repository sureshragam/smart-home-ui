import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
	markAllNotificationsAsRead,
	markNotificationAsRead,
} from "../api/notificationApi";

const NOTIFICATIONS_QUERY_KEY = ["notifications"];
const UNREAD_NOTIFICATION_COUNT_QUERY_KEY = ["notification-count"];

const invalidateNotificationQueries = (
	queryClient: ReturnType<typeof useQueryClient>,
) => {
	queryClient.invalidateQueries({
		queryKey: NOTIFICATIONS_QUERY_KEY,
	});

	queryClient.invalidateQueries({
		queryKey: UNREAD_NOTIFICATION_COUNT_QUERY_KEY,
	});
};

export const useMarkNotificationAsRead = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: markNotificationAsRead,

		onSuccess: () => {
			invalidateNotificationQueries(queryClient);
		},

		onError: (error) => {
			console.error("Failed to mark notification as read.", error);
		},
	});
};

export const useMarkAllNotificationsAsRead = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: markAllNotificationsAsRead,

		onSuccess: () => {
			invalidateNotificationQueries(queryClient);
		},

		onError: (error) => {
			console.error("Failed to mark all notifications as read.", error);
		},
	});
};
