export interface DeviceResponse {
	id: number;
	name: string;
	status: "ONLINE" | "OFFLINE";
	motion: "ACTIVE" | "IDLE";
	wifi: string;
	ipAddress: string;
	lastSeen: string;
}
