import api from "./api";

export const captureImage = async (deviceCode: string) => {
	return api.post(`/camera/${deviceCode}/capture`);
};

export const switchCamera = async (deviceCode: string) => {
	return api.post(`/camera/${deviceCode}/switch`);
};
