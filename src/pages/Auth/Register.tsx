import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
	return (
		<AuthCard>
			<AuthHeader
				title="Create Account"
				subtitle="Create your Smart Home account."
			/>

			<RegisterForm />
		</AuthCard>
	);
};

export default Register;
