export const QUERY_KEYS = {
	dashboard: ["dashboard"] as const,
	devices: ["devices"] as const,
	activities: ["activities"] as const,
	health: ["health"] as const,
	environment: ["environment"] as const,
	monitoring: ["monitoring"] as const,
	monitoringServerHistory: ["monitoring", "server-history"] as const,
	monitoringNetworkHistory: ["monitoring", "network-history"] as const,
	monitoringLatencyHistory: ["monitoring", "latency-history"] as const,
};
