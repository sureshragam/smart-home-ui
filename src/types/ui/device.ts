import type { DeviceType } from "../api/device";

export interface DeviceCardModel {
	id: number;
	name: string;

	deviceCode: string;

	type: DeviceType;

	status: "Online" | "Offline";

	wifiStrength: number;

	firmwareVersion: string;

	ipAddress: string;

	lastSeen: string;
}
