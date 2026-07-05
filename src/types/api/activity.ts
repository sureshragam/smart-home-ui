export interface ActivityResponse {
	id: number;
	type:
		| "MOTION_DETECTED"
		| "MOTION_STOPPED"
		| "DEVICE_CONNECTED"
		| "DEVICE_DISCONNECTED"
		| "SYSTEM_STARTED"
		| "SYSTEM_STOPPED"
		| "DEVICE_ONLINE"
		| "DEVICE_OFFLINE";

	title: string;
	device: string;
	timestamp: string;
}
