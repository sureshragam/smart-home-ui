import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../constants/queryKeys";

import {
	getLatestMonitoringMetrics,
	getServerMetricHistory,
	getNetworkMetricHistory,
	getNetworkLatencyHistory,
} from "../api/monitoringApi";

export const useMonitoring = () => {
	return useQuery({
		queryKey: QUERY_KEYS.monitoring,
		queryFn: getLatestMonitoringMetrics,
		refetchInterval: 60000,
		refetchOnWindowFocus: false,
	});
};

export const useServerMetricHistory = () => {
	return useQuery({
		queryKey: QUERY_KEYS.monitoringServerHistory,
		queryFn: getServerMetricHistory,
		refetchInterval: 60000,
		refetchOnWindowFocus: false,
	});
};

export const useNetworkMetricHistory = (interfaceName?: string) => {
	return useQuery({
		queryKey: [...QUERY_KEYS.monitoringNetworkHistory, interfaceName ?? "all"],
		queryFn: () => getNetworkMetricHistory(interfaceName),
		refetchInterval: 60000,
		refetchOnWindowFocus: false,
	});
};

export const useNetworkLatencyHistory = (targetName?: string) => {
	return useQuery({
		queryKey: [...QUERY_KEYS.monitoringLatencyHistory, targetName ?? "all"],
		queryFn: () => getNetworkLatencyHistory(targetName),
		refetchInterval: 60000,
		refetchOnWindowFocus: false,
	});
};
