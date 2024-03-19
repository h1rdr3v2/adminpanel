import "./root.css";
import { Button, Layout, Menu } from "antd";
import {
	HomeOutlined,
	LogoutOutlined,
	DollarCircleOutlined,
	TeamOutlined,
	HistoryOutlined,
	BookOutlined,
	SettingOutlined,
	ContainerOutlined,
	SoundOutlined,
} from "@ant-design/icons";
import React from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items = [
	{
		key: "1",
		icon: <HomeOutlined />,
		label: <Link to="/user/home">Home</Link>,
	},
	{
		key: "2",
		icon: <DollarCircleOutlined />,
		label: <Link to="/user/commissions">Commissions</Link>,
	},
	{
		key: "4",
		icon: <TeamOutlined />,
		label: <Link to="/user/contest">Ref Contest</Link>,
	},
	{
		key: "5",
		icon: <HistoryOutlined />,
		label: <Link to="/user/history">Withdrawal History</Link>,
	},
	{
		key: "6",
		icon: <BookOutlined />,
		label: <Link to="/user/texts">Texts & Layouts</Link>,
	},
	{
		key: "7",
		icon: <ContainerOutlined />,
		label: <Link to="/user/create-task">Create Task</Link>,
	},
	{
		key: "8",
		icon: <ContainerOutlined />,
		label: <Link to="/user/all-tasks">All Tasks</Link>,
	},
	{
		key: "9",
		icon: <SoundOutlined />,
		label: <Link to="/user/global-message">Global Message</Link>,
	},
	{
		key: "10",
		icon: <SettingOutlined />,
		label: <Link to="/user/settings">Settings</Link>,
	},
];

const UserRoot = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const handleLogout = async () => {
		navigate("/logout");
	};

	const getSelectedKey = () => {
		const path = location.pathname;
		const selectedItem = items.find((item) => {
			const linkPath = item.label.props.to;
			return linkPath === path;
		});
		return selectedItem ? selectedItem.key : "1";
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider breakpoint="lg" collapsedWidth="0">
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[getSelectedKey()]}
					items={items}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						background: "white",
						padding: "0 24px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div className="logo" />
					<Button
						type="primary"
						icon={<LogoutOutlined />}
						onClick={handleLogout}
					>
						Log Out
					</Button>
				</Header>
				<Content style={{ margin: "24px 16px 0", overflow: "auto" }}>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							borderRadius: 24,
							background: "white",
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>DevEze</Footer>
			</Layout>
		</Layout>
	);
};

export default UserRoot;
