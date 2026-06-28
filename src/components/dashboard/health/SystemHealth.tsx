import { Grid, Stack, Typography } from "@mui/material";

import type { HealthResponse } from "../../../types/api/health";
import { mapHealthToMetrics } from "../../../mappers/healthMapper";

import HealthMetric from "./HealthMetric";

interface SystemHealthProps {
	metrics: HealthResponse[];
}

const SystemHealth = ({ metrics }: SystemHealthProps) => {
	const healthMetrics = mapHealthToMetrics(metrics);

	return (
		<Stack spacing={3} sx={{ mt: 4 }}>
			<Typography variant="h5" sx={{ fontWeight: 600 }}>
				System Health
			</Typography>

			<Grid container spacing={3}>
				{healthMetrics.map((metric) => (
					<Grid key={metric.id} size={{ xs: 12, sm: 6, md: 4 }}>
						<HealthMetric {...metric} />
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};

export default SystemHealth;
