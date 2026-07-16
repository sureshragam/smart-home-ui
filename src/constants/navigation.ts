import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import AutoModeRoundedIcon from "@mui/icons-material/AutoModeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import type { NavigationItem } from "../types/navigation";

export const navLinks: NavigationItem[] = [
	{
		label: "Dashboard",
		path: "/",
		icon: DashboardRoundedIcon,
	},
	{
		label: "Devices",
		path: "/devices",
		icon: DevicesRoundedIcon,
	},
	{
		label: "Automations",
		path: "/automations",
		icon: AutoModeRoundedIcon,
	},
	{
		label: "Analytics",
		path: "/analytics",
		icon: AnalyticsRoundedIcon,
	},
	{
		label: "Settings",
		path: "/settings",
		icon: SettingsRoundedIcon,
	},
];
