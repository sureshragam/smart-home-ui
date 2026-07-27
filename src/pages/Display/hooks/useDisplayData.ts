import { useMemo } from "react";

import { useEnvironmentData } from "../../../hooks/useEnvironmentData";

import type { DisplayData } from "../types";

const getAirQualityLabel = (airQuality: number): string => {
	if (airQuality <= 50) return "Good";
	if (airQuality <= 100) return "Moderate";
	if (airQuality <= 150) return "Poor";
	return "Hazardous";
};

const useDisplayData = (): DisplayData => {
	const { data: environment } = useEnvironmentData();

	return useMemo(() => {
		if (!environment) {
			return {
				date: new Date(),
				roomName: "Living Room",
				temperature: 0,
				feelsLike: 0,
				humidity: 0,
				pressure: 0,
				airQuality: "Unknown",
				lastUpdated: new Date(),
			};
		}

		return {
			date: new Date(),
			roomName: "Bedroom Room",
			temperature: environment.temperature,
			feelsLike: environment.temperature, // Replace when backend provides feelsLike
			humidity: environment.humidity,
			pressure: environment.pressure,
			airQuality: getAirQualityLabel(environment.airQuality),
			lastUpdated: new Date(environment.lastUpdated),
		};
	}, [environment]);
};

export default useDisplayData;
