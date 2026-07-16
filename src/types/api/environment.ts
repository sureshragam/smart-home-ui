export interface EnvironmentResponse {
	temperature: number;
	humidity: number;
	pressure: number;
	doorStatus: boolean;
	airQuality: number;
	lastUpdated: string;
}
