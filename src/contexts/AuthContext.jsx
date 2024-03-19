import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const storedData = JSON.parse(localStorage.getItem("loggedIn"));

	useEffect(() => {
		if (storedData) {
			setIsAuthenticated(true);
		}
	}, []);

	const login = () => {
		localStorage.setItem("loggedIn", "true");
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem("loggedIn");
		setIsAuthenticated(false);
	};
	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
