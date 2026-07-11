import { useState } from "react";

import {
	Button,
	Checkbox,
	FormControlLabel,
	InputAdornment,
	Link,
	Stack,
	TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useQueryClient } from "@tanstack/react-query";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { login } from "../../api/authApi";

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const handleLogin = async () => {
		try {
			setLoading(true);

			await login({
				email,
				password,
			});
			await queryClient.invalidateQueries({
				queryKey: ["auth-me"],
			});

			navigate("/");
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Stack spacing={3}>
			<TextField
				label="Email Address"
				type="email"
				fullWidth
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<TextField
				label="Password"
				type={showPassword ? "text" : "password"}
				fullWidth
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onClick={() => setShowPassword(!showPassword)}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<FormControlLabel control={<Checkbox />} label="Remember Me" />

			<Button
				variant="contained"
				size="large"
				fullWidth
				onClick={handleLogin}
				disabled={loading}
			>
				{loading ? "Signing In..." : "Sign In"}
			</Button>

			<Link
				component={RouterLink}
				to="/register"
				underline="hover"
				textAlign="center"
			>
				Don't have an account? Create one
			</Link>
		</Stack>
	);
};

export default LoginForm;
