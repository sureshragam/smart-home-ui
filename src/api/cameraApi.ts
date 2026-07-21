import api from "./api";
import type {
	CameraCaptureResponse,
	CameraStatusResponse,
	CameraSwitchResponse,
} from "../types/api/camera";

export const getCameraStatus = async (
	deviceCode: string,
): Promise<CameraStatusResponse> => {
	const { data } = await api.get(`/camera/${deviceCode}/status`);

	return data;
};

export const switchCamera = async (
	deviceCode: string,
): Promise<CameraSwitchResponse> => {
	const { data } = await api.post(`/camera/${deviceCode}/switch`);

	return data;
};

export const captureImage = async (
	deviceCode: string,
): Promise<CameraCaptureResponse> => {
	const { data } = await api.post(`/camera/${deviceCode}/capture`);

	return data;
};

export const getSnapshotUrl = (deviceCode: string) =>
	`${api.defaults.baseURL}/camera/${deviceCode}/snapshot`;

export const getStreamUrl = (deviceCode: string) =>
	`${api.defaults.baseURL}/camera/${deviceCode}/stream`;
