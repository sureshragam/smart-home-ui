import type { DeviceLocation, DeviceType } from "../api/device";

export interface DeviceCardModel {
	id: number;

	name: string;

	deviceCode: string;

	type: DeviceType;

	location: DeviceLocation;

	status: "Online" | "Offline";

	wifiStrength: number;

	firmwareVersion: string;

	ipAddress: string;

	lastSeen: string;
}
