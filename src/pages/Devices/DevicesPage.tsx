import { Box } from "@mui/material";

import PageHeader from "../../components/common/PageHeader";

import DeviceSummary from "../../components/devices/DeviceSummary";
import DeviceTable from "../../components/devices/DeviceTable";
import DeviceToolbar from "../../components/devices/DeviceToolbar";
import { useDevicesData } from "../../hooks/useDevicesData";

import type { DeviceType } from "../../types/api/device";
import { useState } from "react";

const DevicesPage = () => {
	interface DeviceTypeOption {
		id: string;
		label: string;
		value: DeviceType | "ALL";
	}
	type DeviceStatus = "ONLINE" | "OFFLINE";
	interface DeviceStateOption {
		id: string;
		label: string;
		value: DeviceStatus | "ALL";
	}

	const typeOptions: DeviceTypeOption[] = [
		{ id: "all", label: "All Types", value: "ALL" },
		{ id: "esp32", label: "ESP32", value: "ESP32" },
		{ id: "esp32_cam", label: "ESP32 Camera", value: "ESP32_CAM" },
	];

	const stateOptions: DeviceStateOption[] = [
		{ id: "all", label: "All Status", value: "ALL" },
		{ id: "online", label: "Online", value: "ONLINE" },
		{ id: "offline", label: "Offline", value: "OFFLINE" },
	];
	const { data: devices = [] } = useDevicesData();
	const [deviceType, setDeviceType] = useState(typeOptions[0].value);
	const [deviceStatus, setDeviceStatus] = useState(stateOptions[0].value);

	const filteredData = devices.filter((device) => {
		const matchesType = deviceType === "ALL" || device.type === deviceType;

		const matchesStatus =
			deviceStatus === "ALL" || device.status === deviceStatus;

		return matchesType && matchesStatus;
	});

	return (
		<Box>
			<PageHeader
				title="Devices"
				subtitle="Manage and monitor all connected smart home devices."
			/>

			<DeviceToolbar
				typeOptions={typeOptions}
				deviceType={deviceType}
				setDeviceType={setDeviceType}
				stateOptions={stateOptions}
				deviceStatus={deviceStatus}
				setDeviceStatus={setDeviceStatus}
			/>

			<DeviceSummary />

			<Box mt={4}>
				<DeviceTable devices={filteredData} />
			</Box>
		</Box>
	);
};

export default DevicesPage;
