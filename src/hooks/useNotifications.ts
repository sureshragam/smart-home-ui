import { useQuery } from "@tanstack/react-query";

import {
	getNotifications,
	getUnreadNotificationCount,
} from "../api/notificationApi";

export const useNotifications = () => {
	return useQuery({
		queryKey: ["notifications"],
		queryFn: getNotifications,
		refetchInterval: 30000,
	});
};

export const useUnreadNotificationCount = () => {
	return useQuery({
		queryKey: ["notification-count"],
		queryFn: getUnreadNotificationCount,
		refetchInterval: 30000,
	});
};
