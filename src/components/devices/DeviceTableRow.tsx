import {
	TableRow,
	TableCell,
	Chip,
	Stack,
	Typography,
	IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WifiIcon from "@mui/icons-material/Wifi";
import SensorsIcon from "@mui/icons-material/Sensors";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MemoryIcon from "@mui/icons-material/Memory";

import { useNavigate } from "react-router-dom";

import type { DeviceResponse } from "../../types/api/device";

interface DeviceTableRowProps {
	device: DeviceResponse;
}

const getDeviceIcon = (type: string) => {
	switch (type) {
		case "PIR_SENSOR":
			return <SensorsIcon color="warning" />;

		case "ESP32_CAM":
			return <CameraAltIcon color="primary" />;

		case "RELAY":
			return <LightbulbIcon color="success" />;

		default:
			return <MemoryIcon color="action" />;
	}
};

const DeviceTableRow = ({ device }: DeviceTableRowProps) => {
	const navigate = useNavigate();

	const handleRowClick = () => {
		navigate(`/devices/${device.deviceCode}`);
	};

	return (
		<TableRow
			hover
			onClick={handleRowClick}
			sx={{
				cursor: "pointer",
				"&:hover": {
					backgroundColor: "action.hover",
				},
			}}
		>
			<TableCell>
				<Chip
					label={device.status}
					color={device.status === "ONLINE" ? "success" : "error"}
					size="small"
				/>
			</TableCell>

			<TableCell>
				<Typography fontWeight={600}>{device.name}</Typography>
			</TableCell>

			<TableCell>
				<Stack direction="row" spacing={1} alignItems="center">
					{getDeviceIcon(device.type)}

					<Typography variant="body2">
						{device.type.replaceAll("_", " ")}
					</Typography>
				</Stack>
			</TableCell>

			<TableCell>{device.ipAddress}</TableCell>

			<TableCell>
				<Stack direction="row" spacing={1} alignItems="center">
					<WifiIcon fontSize="small" color="primary" />

					<Typography>{device.wifiStrength} dBm</Typography>
				</Stack>
			</TableCell>

			<TableCell>{device.firmwareVersion}</TableCell>

			<TableCell>{device.lastSeen}</TableCell>

			<TableCell align="right">
				<IconButton
					color="primary"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<EditIcon />
				</IconButton>

				<IconButton
					color="error"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<DeleteIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

export default DeviceTableRow;
