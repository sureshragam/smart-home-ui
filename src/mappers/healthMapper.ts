import type { HealthResponse } from "../types/api/health";
import type { HealthMetricModel } from "../types/ui/health";

export const mapHealthToMetrics = (
	health: HealthResponse[],
): HealthMetricModel[] =>
	health.map((item) => ({
		...item,
		status:
			item.status === "SUCCESS"
				? "success"
				: item.status === "WARNING"
					? "warning"
					: item.status === "ERROR"
						? "error"
						: item.status === "INFO"
							? "info"
							: "neutral",
	}));
