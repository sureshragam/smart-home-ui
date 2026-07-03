import { Box } from "@mui/material";

import PageHeader from "../../components/common/PageHeader";

import DeviceSummary from "../../components/devices/DeviceSummary";
import DeviceTable from "../../components/devices/DeviceTable";
import DeviceToolbar from "../../components/devices/DeviceToolbar";

const DevicesPage = () => {
	return (
		<Box>
			<PageHeader
				title="Devices"
				subtitle="Manage and monitor all connected smart home devices."
			/>

			<DeviceToolbar />

			<DeviceSummary />

			<Box mt={4}>
				<DeviceTable />
			</Box>
		</Box>
	);
};

export default DevicesPage;
