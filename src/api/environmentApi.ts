import api from "./api";
import type { EnvironmentResponse } from "../types/api/environment";

export const getEnvironment = async (): Promise<EnvironmentResponse> => {
	const { data } = await api.get<EnvironmentResponse>("/dashboard/environment");

	return data;
};
