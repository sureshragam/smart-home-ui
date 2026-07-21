import api from "./api";

import type { AddDeviceRequest, DeviceResponse } from "../types/api/device";

export const getDevices = async (): Promise<DeviceResponse[]> => {
	const { data } = await api.get<DeviceResponse[]>("/devices");

	return data;
};

export const getDevice = async (
	deviceCode: string,
): Promise<DeviceResponse> => {
	const { data } = await api.get<DeviceResponse>(`/devices/${deviceCode}`);

	return data;
};

export const addDevice = async (
	request: AddDeviceRequest,
): Promise<DeviceResponse> => {
	const { data } = await api.post<DeviceResponse>("/devices", request);

	return data;
};
