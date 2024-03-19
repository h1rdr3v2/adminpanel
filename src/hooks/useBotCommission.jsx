import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { message } from "antd";
import api from "../api";

const useBotCommission = () => {
	const [loading, setLoading] = useState(null);
	const { logout } = useAuth();

	const getCommissions = async (bot_token) => {
		setLoading(true);
		try {
			const response = await api.post(`/bot/${bot_token}/commission/get`);
			return response.data;
		} catch (err) {
			if (err.response.status === 401) {
				message.error("Session expired, please login again");
				logout();
			} else {
				message.error(err.message);
			}
		} finally {
			setLoading(false);
		}
	};
	const setCommissions = async (bot_token, values) => {
		setLoading(true);
		try {
			const response = await api.post(
				`/bot/${bot_token}/commission/set`,
				values
			);
			message.success("Commissions updated successfully");
		} catch (err) {
			if (err.response.status === 401) {
				message.error("Session expired, please login again");
				logout();
			} else {
				message.error(err.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		setCommissions,
		getCommissions,
	};
};

export default useBotCommission;
