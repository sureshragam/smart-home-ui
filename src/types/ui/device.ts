export interface DeviceCardModel {
	id: number;
	name: string;
	status: "Online" | "Offline";
	motion: "Active" | "Idle";
	wifi: string;
	ipAddress: string;
	lastSeen: string;
}
