// React
import type { ReactNode } from "react";

// Third-party
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Local
import theme from "../theme";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
});

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ThemeProvider>
	);
};

export default Providers;
