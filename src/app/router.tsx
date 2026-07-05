import { createHashRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

import DashboardPage from "../pages/Dashboard";
import DevicesPage from "../pages/Devices";
import AnalyticsPage from "../pages/Analytics";
import AutomationsPage from "../pages/Automations";
import SettingsPage from "../pages/Settings";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "../routes/PublicRoute";
import { Navigate } from "react-router-dom";

const router = createHashRouter([
	// Public Routes
	{
		element: <PublicRoute />,
		children: [
			{
				element: <AuthLayout />,
				children: [
					{
						path: "/login",
						element: <LoginPage />,
					},
					{
						path: "/register",
						element: <RegisterPage />,
					},
				],
			},
		],
	},

	// Protected Routes
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: "/",
				element: <DashboardLayout />,
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
		],
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);

export default router;
