import { useMemo } from "react";

import type { DisplayData } from "../types";

const useDisplayData = (): DisplayData => {
	return useMemo(
		() => ({
			date: new Date(),

			roomName: "Living Room",

			temperature: 28.4,

			feelsLike: 29,

			humidity: 72,

			pressure: 1010,

			airQuality: "Good",

			lastUpdated: new Date(),
		}),
		[],
	);
};

export default useDisplayData;
