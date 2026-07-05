import { Card, CardContent } from "@mui/material";
import type { ReactNode } from "react";

interface AuthCardProps {
	children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
	return (
		<Card
			elevation={6}
			sx={{
				borderRadius: 3,
				maxWidth: 500,
				width: "100%",
				mx: "auto",
			}}
		>
			<CardContent
				sx={{
					p: 5,
				}}
			>
				{children}
			</CardContent>
		</Card>
	);
};

export default AuthCard;
