export interface HealthResponse {
	id: number;
	label: string;
	value: string;
	status: "SUCCESS" | "WARNING" | "ERROR" | "INFO" | "NEUTRAL";
}
