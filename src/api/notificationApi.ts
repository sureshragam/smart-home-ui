import api from "./api";

import type { NotificationResponse } from "../types/api/notification";

export const getNotifications = async (): Promise<NotificationResponse[]> => {
	const { data } = await api.get<NotificationResponse[]>("/notifications");

	return data;
};

export const getUnreadNotifications = async (): Promise<
	NotificationResponse[]
> => {
	const { data } = await api.get<NotificationResponse[]>(
		"/notifications/unread",
	);

	return data;
};

export const getUnreadNotificationCount = async (): Promise<number> => {
	const { data } = await api.get<number>("/notifications/unread/count");

	return data;
};

export const markNotificationAsRead = async (id: number): Promise<void> => {
	await api.put(`/notifications/${id}/read`);
};

export const markAllNotificationsAsRead = async (): Promise<void> => {
	await api.put("/notifications/read-all");
};
