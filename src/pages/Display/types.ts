export interface DisplayData {
	date: Date;
	roomName: string;

	temperature: number;
	feelsLike: number;

	humidity: number;
	pressure: number;

	airQuality: string;
	airQualityPpm: number;

	lastUpdated: Date;
}
