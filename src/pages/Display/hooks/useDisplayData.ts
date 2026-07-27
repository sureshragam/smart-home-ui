import { useMemo } from "react";

import { useEnvironmentData } from "../../../hooks/useEnvironmentData";

import type { DisplayData } from "../types";

export const getAirQualityStatus = (ppm: number): string => {
	if (ppm < 650) return "Excellent";
	if (ppm < 850) return "Good";
	if (ppm < 1100) return "Moderate";
	if (ppm < 1500) return "Poor";

	return "Hazardous";
};

export const getAirQualityColor = (ppm: number): string => {
	if (ppm < 650) return "#22C55E";
	if (ppm < 850) return "#4ADE80";
	if (ppm < 1100) return "#FACC15";
	if (ppm < 1500) return "#FB923C";

	return "#EF4444";
};

const useDisplayData = (): DisplayData => {
	const { data: environment } = useEnvironmentData();

	return useMemo(() => {
		if (!environment) {
			return {
				date: new Date(),
				roomName: "Bedroom",
				temperature: 0,
				feelsLike: 0,
				humidity: 0,
				pressure: 0,

				airQuality: "Unknown",
				airQualityPpm: 0,

				lastUpdated: new Date(),
			};
		}

		return {
			date: new Date(),
			roomName: "Bedroom",

			temperature: environment.temperature,
			feelsLike: environment.temperature, // Replace when backend provides feelsLike

			humidity: environment.humidity,
			pressure: environment.pressure,

			airQuality: getAirQualityStatus(environment.airQuality),
			airQualityPpm: environment.airQuality,

			lastUpdated: new Date(environment.lastUpdated),
		};
	}, [environment]);
};

export default useDisplayData;
