export type DeviceType =
	| "ESP32"
	| "ESP32_CAM"
	| "PIR_SENSOR"
	| "TEMPERATURE_SENSOR"
	| "HUMIDITY_SENSOR"
	| "SMART_SWITCH";

export interface DeviceResponse {
	id: number;
	name: string;
	deviceCode: string;
	type: DeviceType;
	status: "ONLINE" | "OFFLINE";
	motionStatus: "ACTIVE" | "IDLE";
	wifiStrength: number;
	firmwareVersion: string;
	ipAddress: string;
	lastSeen: string;
}
