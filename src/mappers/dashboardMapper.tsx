import type { DashboardResponse } from "../types/api/dashboard";
import type { SummaryCardModel } from "../types/ui/summaryCard";

export const mapDashboardToSummaryCards = (
	data: DashboardResponse,
): SummaryCardModel[] => [
	{
		id: 1,
		title: "Devices",
		value: data.totalDevices.toString(),
		subtitle: `${data.onlineDevices} Online • ${
			data.totalDevices - data.onlineDevices
		} Offline`,
		icon: "devices",
		iconColor: "#1976d2",
	},
	{
		id: 2,
		title: "Motion",
		value: `${data.activeMotionDevices} Active`,
		subtitle: "Live Status",
		icon: "motion",
		iconColor: "#2e7d32",
	},
	{
		id: 3,
		title: "Alerts",
		value: data.alerts.toString(),
		subtitle: "No active alerts",
		icon: "alerts",
		iconColor: "#ed6c02",
	},
	{
		id: 4,
		title: "Uptime",
		value: data.uptime,
		subtitle: "System uptime",
		icon: "uptime",
		iconColor: "#7b1fa2",
	},
];
