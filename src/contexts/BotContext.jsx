import React, { createContext, useContext, useEffect, useState } from "react";

const BotContext = createContext();

export const BotProvider = ({ children }) => {
	const [botData, setBotData] = useState(null);
	const [currentBot, setCurrentBot] = useState(null);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("bot"));
		if (storedData && storedData.bot) {
			setCurrentBot(storedData.bot);
		}
	}, []);
	const setBot = (data) => {
		localStorage.setItem(
			"bot",
			JSON.stringify({
				bot: data,
			})
		);
		setCurrentBot(data);
	};
	const clearBot = () => {
		localStorage.removeItem("bot");
		setCurrentBot(null);
	};

	return (
		<BotContext.Provider
			value={{
				currentBot,
				botData,
				setBotData,
				setBot,
				setCurrentBot,
				clearBot,
			}}
		>
			{children}
		</BotContext.Provider>
	);
};

export const useBot = () => useContext(BotContext);
