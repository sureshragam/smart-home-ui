import api from "./api";
import type { HealthResponse } from "../types/api/health";

export const getHealth = async (): Promise<HealthResponse[]> => {
	const { data } = await api.get<HealthResponse[]>("/health");
	return data;
};
