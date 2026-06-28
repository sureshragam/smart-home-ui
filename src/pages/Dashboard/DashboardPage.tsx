import { Grid } from "@mui/material";

import DashboardHero from "../../components/dashboard/hero";
import SummaryCards from "../../components/dashboard/summary";
import DeviceStatus from "../../components/dashboard/status";
import RecentActivity from "../../components/dashboard/activity";
import SystemHealth from "../../components/dashboard/health";

import { useDashboardData } from "../../hooks/useDashboardData";
import { useDevicesData } from "../../hooks/useDevicesData";
import { useActivitiesData } from "../../hooks/useActivitiesData";
import { useHealthData } from "../../hooks/useHealthData";

const DashboardPage = () => {
	const {
		data: dashboardData,
		isLoading: isDashboardLoading,
		isError: isDashboardError,
	} = useDashboardData();

	const {
		data: deviceList,
		isLoading: isDevicesLoading,
		isError: isDevicesError,
	} = useDevicesData();

	const {
		data: activityList,
		isLoading: isActivitiesLoading,
		isError: isActivitiesError,
	} = useActivitiesData();

	const {
		data: healthMetrics,
		isLoading: isHealthLoading,
		isError: isHealthError,
	} = useHealthData();

	const isLoading =
		isDashboardLoading ||
		isDevicesLoading ||
		isActivitiesLoading ||
		isHealthLoading;
	const isError =
		isDashboardError || isDevicesError || isActivitiesError || isHealthError;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (
		isError ||
		!dashboardData ||
		!deviceList ||
		!activityList ||
		!healthMetrics
	) {
		return <div>Something went wrong.</div>;
	}

	return (
		<>
			<DashboardHero />

			<SummaryCards data={dashboardData} />

			<Grid container spacing={3} sx={{ mt: 1 }}>
				<Grid size={{ xs: 12, lg: 8 }}>
					<DeviceStatus devices={deviceList} />
				</Grid>

				<Grid size={{ xs: 12, lg: 4 }}>
					<RecentActivity activities={activityList} />
				</Grid>

				<Grid size={12}>
					<SystemHealth metrics={healthMetrics} />
				</Grid>
			</Grid>
		</>
	);
};

export default DashboardPage;
