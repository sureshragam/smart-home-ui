import { Box, Typography } from "@mui/material";

const Row = ({
	label,
	value,
	color = "white",
}: {
	label: string;
	value: string;
	color?: string;
}) => (
	<Box
		display="flex"
		justifyContent="space-between"
		alignItems="center"
		sx={{
			py: 2,
			borderBottom: "1px solid rgba(255,255,255,.15)",
		}}
	>
		<Typography fontSize={30} fontWeight={300}>
			{label}
		</Typography>

		<Typography fontSize={34} fontWeight={600} color={color}>
			{value}
		</Typography>
	</Box>
);

const MetricsSection = () => {
	return (
		<Box>
			<Row label="Humidity" value="72%" />

			<Row label="Air Quality" value="Good" color="#4ADE80" />

			<Row label="Pressure" value="1010 hPa" />

			<Row label="Feels Like" value="29°" />
		</Box>
	);
};

export default MetricsSection;
