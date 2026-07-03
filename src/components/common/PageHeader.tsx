import { Box, Typography } from "@mui/material";

interface PageHeaderProps {
	title: string;
	subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
	return (
		<Box mb={4}>
			<Typography variant="h4" fontWeight={700}>
				{title}
			</Typography>

			{subtitle && (
				<Typography variant="body1" color="text.secondary" mt={1}>
					{subtitle}
				</Typography>
			)}
		</Box>
	);
};

export default PageHeader;
