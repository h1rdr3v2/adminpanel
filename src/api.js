import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8002/api",
	withCredentials: true,
});

api.defaults.headers.post["Content-Type"] = "application/json";

// Add an interceptor to refresh the token if it has expired
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 403) {
			localStorage.removeItem("loggedIn");
			localStorage.removeItem("bot");
			// Token has expired or is invalid, redirect to login page
			window.location.href = "/logout";
		}
		return Promise.reject(error);
	}
);

export default api;
