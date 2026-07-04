import { Box } from "@mui/material";

import PageHeader from "../../components/common/PageHeader";

import DeviceSummary from "../../components/devices/DeviceSummary";
import DeviceTable from "../../components/devices/DeviceTable";
import DeviceToolbar from "../../components/devices/DeviceToolbar";
import { useDevicesData } from "../../hooks/useDevicesData";

import type { DeviceType } from "../../types/api/device";

const DevicesPage = () => {
	const { data: devices = [] } = useDevicesData();

	interface DeviceTypeOption {
		id: string;
		label: string;
		value: DeviceType;
	}

	const typeOptions: DeviceTypeOption[] = [
		{ id: crypto.randomUUID(), label: "ESP32", value: "ESP32" },
		{ id: crypto.randomUUID(), label: "ESP32 Camera", value: "ESP32_CAM" },
		{ id: crypto.randomUUID(), label: "PIR Sensor", value: "PIR_SENSOR" },
		{
			id: crypto.randomUUID(),
			label: "Temperature Sensor",
			value: "TEMPERATURE_SENSOR",
		},
		{
			id: crypto.randomUUID(),
			label: "Humidity Sensor",
			value: "HUMIDITY_SENSOR",
		},
		{ id: crypto.randomUUID(), label: "Smart Switch", value: "SMART_SWITCH" },
	];
	return (
		<Box>
			<PageHeader
				title="Devices"
				subtitle="Manage and monitor all connected smart home devices."
			/>

			<DeviceToolbar typeOptions={typeOptions} />

			<DeviceSummary />

			<Box mt={4}>
				<DeviceTable devices={devices} />
			</Box>
		</Box>
	);
};

export default DevicesPage;
