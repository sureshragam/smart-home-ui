import { useState } from "react";

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	Stack,
	TextField,
} from "@mui/material";

import { useDeviceMutations } from "../../../hooks/useDeviceMutations";
import type {
	AddDeviceRequest,
	DeviceLocation,
	DeviceType,
} from "../../../types/api/device";

interface AddDeviceDialogProps {
	open: boolean;
	onClose: () => void;
}

const DEVICE_TYPES: DeviceType[] = [
	"ESP32",
	"ESP32_CAM",
	"ARDUINO_UNO",
	"ARDUINO_NANO",
	"RASPBERRY_PI",
	"SMART_SWITCH",
	"ANDROID_CAMERA",
];

const DEVICE_LOCATIONS: DeviceLocation[] = [
	"LIVING_ROOM",
	"BEDROOM",
	"KITCHEN",
	"BATHROOM",
	"BALCONY",
	"AQUARIUM",
	"OFFICE",
];

const initialForm: AddDeviceRequest = {
	name: "",
	type: "ESP32",
	location: "LIVING_ROOM",
};

export const AddDeviceDialog = ({ open, onClose }: AddDeviceDialogProps) => {
	const { addDeviceMutation } = useDeviceMutations();

	const [form, setForm] = useState<AddDeviceRequest>(initialForm);

	const isValid = form.name.trim().length >= 3;

	const handleClose = () => {
		if (addDeviceMutation.isPending) return;

		setForm(initialForm);
		onClose();
	};

	const handleSubmit = () => {
		if (!isValid) return;

		addDeviceMutation.mutate(
			{
				...form,
				name: form.name.trim(),
			},
			{
				onSuccess: () => {
					handleClose();
				},
			},
		);
	};

	return (
		<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
			<DialogTitle>Add Device</DialogTitle>

			<DialogContent>
				<Stack spacing={2} mt={1}>
					<TextField
						label="Device Name"
						value={form.name}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
						fullWidth
						required
						disabled={addDeviceMutation.isPending}
						error={form.name.length > 0 && !isValid}
						helperText={
							form.name.length > 0 && !isValid
								? "Device name must be at least 3 characters."
								: " "
						}
					/>

					<TextField
						select
						label="Device Type"
						value={form.type}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								type: e.target.value as DeviceType,
							}))
						}
						fullWidth
						disabled={addDeviceMutation.isPending}
					>
						{DEVICE_TYPES.map((type) => (
							<MenuItem key={type} value={type}>
								{type}
							</MenuItem>
						))}
					</TextField>

					<TextField
						select
						label="Device Location"
						value={form.location}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								location: e.target.value as DeviceLocation,
							}))
						}
						fullWidth
						disabled={addDeviceMutation.isPending}
					>
						{DEVICE_LOCATIONS.map((location) => (
							<MenuItem key={location} value={location}>
								{location.replaceAll("_", " ")}
							</MenuItem>
						))}
					</TextField>
				</Stack>
			</DialogContent>

			<DialogActions>
				<Button onClick={handleClose} disabled={addDeviceMutation.isPending}>
					Cancel
				</Button>

				<Button
					variant="contained"
					onClick={handleSubmit}
					disabled={!isValid || addDeviceMutation.isPending}
				>
					{addDeviceMutation.isPending ? "Adding..." : "Add Device"}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
