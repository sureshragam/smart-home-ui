export type NotificationPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type NotificationStatus = "UNREAD" | "READ" | "ARCHIVED";

export type NotificationType =
	| "TEMPERATURE"
	| "HUMIDITY"
	| "PRESSURE"
	| "MOTION"
	| "DOOR"
	| "CAMERA"
	| "SECURITY"
	| "DEVICE"
	| "ENERGY"
	| "WATER_LEAK"
	| "GAS"
	| "SMOKE"
	| "SYSTEM";

export interface NotificationResponse {
	id: number;

	type: NotificationType;

	priority: NotificationPriority;

	status: NotificationStatus;

	title: string;

	message: string;

	deviceCode: string;

	sensorCode?: string;

	source?: string;

	value?: number;

	unit?: string;

	notificationTime: string;
}
