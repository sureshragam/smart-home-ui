import api from "./api";

import type { ActivityResponse } from "../types/api/activity";

export const getActivities = async (): Promise<ActivityResponse[]> => {
	const { data } = await api.get<ActivityResponse[]>("/activities");

	return data;
};
