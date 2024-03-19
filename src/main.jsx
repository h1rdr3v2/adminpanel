import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { BotProvider } from "./contexts/BotContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import Login from "./routes/Login.jsx";
import Dashboard from "./routes/Dashboard";
import UserRoot from "./routes/UserRoot.jsx";
import { PrivateRoute, AuthenticatedRoute } from "./PrivateRoute";
import SelectBot from "./routes/SelectBot.jsx";
import History from "./routes/History.jsx";
import Commissions from "./routes/Commissions.jsx";
import Settings from "./routes/Settings.jsx";
import Texts from "./routes/Texts.jsx";
import Contest from "./routes/Contest.jsx";
import CreateTask from "./routes/CreateTask.jsx";
import AllTasks from "./routes/AllTasks.jsx";
import GlobalMessage from "./routes/GlobalMessage.jsx";
import Logout from "./routes/Logout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		exact: true,
		element: (
			<AuthenticatedRoute component={Login} redirectTo="/user/home" />
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/logout",
		element: <Logout />,
	},
	{
		path: "/select-bot",
		element: <PrivateRoute component={SelectBot} />,
	},
	{
		path: "/user",
		element: <PrivateRoute component={UserRoot} />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "home",
				index: true,
				element: <Dashboard />,
			},
			{
				path: "history",
				element: <History />,
			},
			{
				path: "texts",
				element: <Texts />,
			},
			{
				path: "create-task",
				element: <CreateTask />,
			},
			{
				path: "all-tasks",
				element: <AllTasks />,
			},
			{
				path: "settings",
				element: <Settings />,
			},
			{
				path: "contest",
				element: <Contest />,
			},
			{
				path: "global-message",
				element: <GlobalMessage />,
			},
			{
				path: "commissions",
				element: <Commissions />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<BotProvider>
				<RouterProvider router={router} />
			</BotProvider>
		</AuthProvider>
	</React.StrictMode>
);
