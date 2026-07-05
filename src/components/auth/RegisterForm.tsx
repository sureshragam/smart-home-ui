import { useState } from "react";

import {
	Button,
	InputAdornment,
	Link,
	Stack,
	TextField,
	IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link as RouterLink } from "react-router-dom";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<Stack spacing={3}>
			<TextField label="First Name" fullWidth required />

			<TextField label="Last Name" fullWidth required />

			<TextField label="Email Address" type="email" fullWidth required />

			<TextField
				label="Password"
				type={showPassword ? "text" : "password"}
				fullWidth
				required
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<TextField
				label="Confirm Password"
				type={showConfirmPassword ? "text" : "password"}
				fullWidth
				required
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<Button variant="contained" size="large" fullWidth>
				Create Account
			</Button>

			<Link
				component={RouterLink}
				to="/login"
				underline="hover"
				textAlign="center"
			>
				Already have an account? Sign In
			</Link>
		</Stack>
	);
};

export default RegisterForm;
