import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
	return (
		<AuthCard>
			<AuthHeader
				title="Welcome Back"
				subtitle="Sign in to access your Smart Home dashboard."
			/>

			<LoginForm />
		</AuthCard>
	);
};

export default Login;
