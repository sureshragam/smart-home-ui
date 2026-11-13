export interface ServerMetricResponse {
	cpuUsagePercent: number | null;
	usedMemoryBytes: number | null;
	totalMemoryBytes: number | null;
	usedDiskBytes: number | null;
	totalDiskBytes: number | null;
	cpuTemperatureCelsius: number | null;
	createdAt: string;
}

export interface NetworkMetricResponse {
	interfaceName: string;
	displayName: string | null;
	ipv4Addresses: string | null;
	bytesReceived: number | null;
	bytesSent: number | null;
	packetsReceived: number | null;
	packetsSent: number | null;
	speedBitsPerSecond: number | null;
	downloadBytesPerSecond: number | null;
	uploadBytesPerSecond: number | null;
	createdAt: string;
}

export interface NetworkLatencyMetricResponse {
	targetName: string;
	address: string;
	averageLatencyMs: number | null;
	minimumLatencyMs: number | null;
	maximumLatencyMs: number | null;
	packetLossPercent: number | null;
	measurementAvailable: boolean;
	createdAt: string;
}

export interface MonitoringDashboardResponse {
	server: ServerMetricResponse | null;
	networks: NetworkMetricResponse[];
	latencies: NetworkLatencyMetricResponse[];
}
