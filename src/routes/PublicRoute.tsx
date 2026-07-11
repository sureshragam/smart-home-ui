import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../api/authApi";

const PublicRoute = () => {
	const { isLoading, isSuccess } = useQuery({
		queryKey: ["auth-me"],
		queryFn: getCurrentUser,
		retry: false,
		staleTime: 5 * 60 * 1000,
		refetchOnWindowFocus: false,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isSuccess) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

export default PublicRoute;
