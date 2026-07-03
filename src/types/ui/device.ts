export interface DeviceCardModel {
	id: number;
	name: string;

	deviceCode: string;

	type: string;

	status: "Online" | "Offline";

	motion: "Active" | "Idle";

	wifiStrength: number;

	firmwareVersion: string;

	ipAddress: string;

	lastSeen: string;
}
