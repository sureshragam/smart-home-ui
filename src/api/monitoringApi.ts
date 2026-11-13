import api from "./api";

import type {
	MonitoringDashboardResponse,
	ServerMetricResponse,
	NetworkMetricResponse,
	NetworkLatencyMetricResponse,
} from "../types/api/monitoring";

export const getLatestMonitoringMetrics =
	async (): Promise<MonitoringDashboardResponse> => {
		const { data } =
			await api.get<MonitoringDashboardResponse>("/monitoring/latest");
		return data;
	};

export const getServerMetricHistory = async (): Promise<
	ServerMetricResponse[]
> => {
	const { data } = await api.get<ServerMetricResponse[]>(
		"/monitoring/server/history",
	);
	return data;
};

export const getNetworkMetricHistory = async (
	interfaceName?: string,
): Promise<NetworkMetricResponse[]> => {
	const { data } = await api.get<NetworkMetricResponse[]>(
		"/monitoring/network/history",
		{ params: interfaceName ? { interfaceName } : {} },
	);
	return data;
};

export const getNetworkLatencyHistory = async (
	targetName?: string,
): Promise<NetworkLatencyMetricResponse[]> => {
	const { data } = await api.get<NetworkLatencyMetricResponse[]>(
		"/monitoring/latency/history",
		{ params: targetName ? { targetName } : {} },
	);
	return data;
};
