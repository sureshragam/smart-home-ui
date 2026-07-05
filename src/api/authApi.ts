import api from "./api";

import type { LoginRequest, LoginResponse } from "../types/api/auth";

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
	const response = await api.post<LoginResponse>("/api/auth/login", request);

	return response.data;
};
