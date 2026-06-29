import { createHashRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import AnalyticsPage from "../pages/Analytics";
import AutomationsPage from "../pages/Automations";
import DashboardPage from "../pages/Dashboard";
import DevicesPage from "../pages/Devices";
import SettingsPage from "../pages/Settings";

const router = createHashRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
			{
				path: "devices",
				element: <DevicesPage />,
			},
			{
				path: "analytics",
				element: <AnalyticsPage />,
			},
			{
				path: "automations",
				element: <AutomationsPage />,
			},
			{
				path: "settings",
				element: <SettingsPage />,
			},
		],
	},
]);

export default router;
