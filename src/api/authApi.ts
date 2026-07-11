import api from "./api";

import type {
	LoginRequest,
	LoginResponse,
	AuthMeResponse,
} from "../types/api/auth";

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
	const response = await api.post<LoginResponse>("/auth/login", request);

	return response.data;
};
export const getCurrentUser = async (): Promise<AuthMeResponse> => {
	const response = await api.get<AuthMeResponse>("/auth/me");

	return response.data;
};
