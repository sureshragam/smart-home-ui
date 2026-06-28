export interface ActivityResponse {
	id: number;
	type:
		| "MOTION_DETECTED"
		| "MOTION_STOPPED"
		| "DEVICE_CONNECTED"
		| "SYSTEM_STARTED";
	title: string;
	device: string;
	timestamp: string;
}
