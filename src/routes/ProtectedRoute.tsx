import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../api/authApi";

const ProtectedRoute = () => {
	const { isLoading, isError } = useQuery({
		queryKey: ["auth-me"],
		queryFn: getCurrentUser,
		retry: false,
	});

	if (isLoading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}

	if (isError) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
