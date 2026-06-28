import api from "./api";

import type { DeviceResponse } from "../types/api/device";

export const getDevices = async (): Promise<DeviceResponse[]> => {
	const { data } = await api.get<DeviceResponse[]>("/devices");

	return data;
};
