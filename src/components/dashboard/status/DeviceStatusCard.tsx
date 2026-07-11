import { Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import LanRoundedIcon from "@mui/icons-material/LanRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

interface DeviceStatusCardProps {
	id: number;
	name: string;
	status: "Online" | "Offline";
	wifiStrength: number;
	ipAddress: string;
	lastSeen: string;
}

const DeviceStatusCard = ({
	name,
	status,
	wifiStrength,
	ipAddress,
	lastSeen,
}: DeviceStatusCardProps) => {
	const isOnline = status === "Online";

	const details = [
		{
			label: "Wi-Fi",
			value: wifiStrength,
			icon: <WifiRoundedIcon fontSize="small" />,
		},
		{
			label: "IP Address",
			value: ipAddress,
			icon: <LanRoundedIcon fontSize="small" />,
		},
		{
			label: "Last Seen",
			value: lastSeen,
			icon: <AccessTimeRoundedIcon fontSize="small" />,
		},
	];

	return (
		<Paper
			elevation={0}
			sx={{
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 4,
				overflow: "hidden",
				transition: "0.25s",
				"&:hover": {
					boxShadow: 4,
					transform: "translateY(-2px)",
				},
			}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ p: 3 }}
			>
				<Stack spacing={0.5}>
					<Typography variant="h6" fontWeight={700}>
						{name}
					</Typography>
				</Stack>

				<Chip
					label={status}
					color={isOnline ? "success" : "error"}
					size="small"
				/>
			</Stack>

			<Divider />

			<Stack spacing={2} sx={{ p: 3 }}>
				{details.map((item) => (
					<Stack
						key={item.label}
						direction="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Stack
							direction="row"
							spacing={1.5}
							alignItems="center"
							sx={{ minWidth: 150 }}
						>
							{item.icon}

							<Typography variant="body2" color="text.secondary">
								{item.label}
							</Typography>
						</Stack>

						<Typography variant="body2" fontWeight={600} textAlign="right">
							{item.value}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Paper>
	);
};

export default DeviceStatusCard;
