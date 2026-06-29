import type { HealthResponse } from "../types/api/health";
import type { HealthMetricModel } from "../types/ui/health";

const healthStatusMap = {
	HEALTHY: "success",
	WARNING: "warning",
	CRITICAL: "error",
} as const;

export const mapHealthToMetrics = (
	health: HealthResponse[],
): HealthMetricModel[] =>
	health.map((item) => ({
		...item,
		status: healthStatusMap[item.status],
	}));
