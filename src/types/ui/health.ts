export interface HealthMetricModel {
	id: number;
	label: string;
	value: string;
	status: "success" | "warning" | "error" | "info" | "neutral";
}
