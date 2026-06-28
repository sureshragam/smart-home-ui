import api from "./api";
import type { DashboardResponse } from "../types/api/dashboard";

export const getDashboard = async (): Promise<DashboardResponse> => {
	const { data } = await api.get<DashboardResponse>("/dashboard");

	return data;
};
