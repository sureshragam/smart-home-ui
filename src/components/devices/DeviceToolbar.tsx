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

const DeviceToolbar = () => {
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
						defaultValue="ALL"
					>
						<MenuItem value="ALL">All Types</MenuItem>
					</TextField>

					<TextField
						select
						label="Status"
						size="small"
						sx={{ minWidth: 170 }}
						defaultValue="ALL"
					>
						<MenuItem value="ALL">All Status</MenuItem>
						<MenuItem value="ONLINE">Online</MenuItem>
						<MenuItem value="OFFLINE">Offline</MenuItem>
					</TextField>

					<Button variant="contained" startIcon={<AddIcon />}>
						Add Device
					</Button>
				</Stack>
			</CardContent>
			x
		</Card>
	);
};

export default DeviceToolbar;
