export interface DeviceResponse {
	id: number;
	name: string;
	deviceCode: string;
	type: string;
	status: "ONLINE" | "OFFLINE";
	motionStatus: "ACTIVE" | "IDLE";
	wifiStrength: number;
	firmwareVersion: string;
	ipAddress: string;
	lastSeen: string;
}
