export type DeviceType =
	| "ESP32"
	| "ESP32_CAM"
	| "ARDUINO_UNO"
	| "ARDUINO_NANO"
	| "RASPBERRY_PI"
	| "SMART_SWITCH"
	| "ANDROID_CAMERA";

export type DeviceStatus = "ONLINE" | "OFFLINE";

export type DeviceLocation =
	| "LIVING_ROOM"
	| "BEDROOM"
	| "KITCHEN"
	| "BATHROOM"
	| "BALCONY"
	| "AQUARIUM"
	| "OFFICE";

export interface DeviceResponse {
	id: number;
	name: string;
	deviceCode: string;
	type: DeviceType;
	status: DeviceStatus;
	location: DeviceLocation;
	wifiStrength: number;
	firmwareVersion: string;
	ipAddress: string;
	lastSeen: string;
}

export interface AddDeviceRequest {
	name: string;
	type: DeviceType;
	location: DeviceLocation;
}
