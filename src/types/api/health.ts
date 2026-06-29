export interface HealthResponse {
	id: number;
	label: string;
	value: string;
	status: "HEALTHY" | "WARNING" | "CRITICAL";
}
