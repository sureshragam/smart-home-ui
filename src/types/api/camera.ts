export interface CameraStatusResponse {
	status: string;
	camera: string;
	streamReady: boolean;
	frameCount: number;
}

export interface CameraCaptureResponse {
	success: boolean;
	fileName: string;
	path: string;
	size: number;
	message?: string;
}

export interface CameraSwitchResponse {
	success: boolean;
	camera: string;
}
