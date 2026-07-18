import {
	Card,
	CardContent,
	Stack,
	TextField,
	MenuItem,
	Button,
	InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import type { DeviceType } from "../../types/api/device";
import type { Dispatch, SetStateAction } from "react";

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

interface DeviceToolbarProps {
	typeOptions: DeviceTypeOption[];
	deviceType: DeviceType | "ALL";
	setDeviceType: Dispatch<SetStateAction<DeviceType | "ALL">>;
	stateOptions: DeviceStateOption[];
	deviceStatus: DeviceStatus | "ALL";
	setDeviceStatus: Dispatch<SetStateAction<DeviceStatus | "ALL">>;
}

const DeviceToolbar = ({
	typeOptions,
	deviceType,
	setDeviceType,
	stateOptions,
	deviceStatus,
	setDeviceStatus,
}: DeviceToolbarProps) => {
	return (
		<Card
			elevation={0}
			sx={{
				borderRadius: 4,
				border: "1px solid",
				borderColor: "divider",
				mb: 4,
			}}
		>
			<CardContent>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={2}
					alignItems="center"
				>
					<TextField
						fullWidth
						placeholder="Search devices..."
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>

					<TextField
						select
						label="Type"
						size="small"
						sx={{ minWidth: 170 }}
						value={deviceType}
						onChange={(e) =>
							setDeviceType(e.target.value as DeviceType | "ALL")
						}
					>
						{typeOptions.map((eachType) => (
							<MenuItem key={eachType.id} value={eachType.value}>
								{eachType.label}
							</MenuItem>
						))}
					</TextField>

					<TextField
						select
						label="Status"
						size="small"
						sx={{ minWidth: 170 }}
						value={deviceStatus}
						onChange={(e) =>
							setDeviceStatus(e.target.value as DeviceStatus | "ALL")
						}
					>
						{stateOptions.map((eachType) => (
							<MenuItem key={eachType.id} value={eachType.value}>
								{eachType.label}
							</MenuItem>
						))}
					</TextField>

					<Button variant="contained" startIcon={<AddIcon />}>
						Add Device
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default DeviceToolbar;
