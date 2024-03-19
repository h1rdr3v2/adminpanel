import { message } from "antd";
import { useState } from "react";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

const useLogin = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const { login } = useAuth();

	const loginUser = async (username, license) => {
		setLoading(true);
		try {
			await api.post("/login", {
				username,
				license,
			});
			message.success("Login successful");
			login();
		} catch (err) {
			setError(err.response.data.message);
			message.error(err.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	return { error, loading, loginUser };
};

export default useLogin;
