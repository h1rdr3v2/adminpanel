import { useBot } from "../contexts/BotContext";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { message } from "antd";
import api from "../api";

const useSelectBot = () => {
	const { setBotData } = useBot();
	const [loading, setLoading] = useState(null);
	const { logout } = useAuth();

	const getBots = async () => {
		setLoading(true);
		try {
			const response = await api.post(`/bot/all`);
			setBotData(response.data);
		} catch (err) {
			message.error(err.message);
		} finally {
			setLoading(false);
		}
	};
	const createBot = async (bot_token) => {
		setLoading(true);
		try {
			const response = await api.post(`/bot/${bot_token}/new`);
			setBotData(response.data);
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
		getBots,
		createBot,
	};
};

export default useSelectBot;
