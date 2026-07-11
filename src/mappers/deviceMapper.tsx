import type { DeviceResponse } from "../types/api/device";
import type { DeviceCardModel } from "../types/ui/device";

export const mapDevicesToCards = (
	devices: DeviceResponse[],
): DeviceCardModel[] =>
	devices.map((device) => ({
		...device,
		status: device.status === "ONLINE" ? "Online" : "Offline",
	}));
