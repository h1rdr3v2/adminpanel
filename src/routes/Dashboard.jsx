import { Typography, Space } from "antd";
import { useBot } from "../contexts/BotContext";

const Dashboard = () => {
	const { currentBot } = useBot();
	if (!currentBot) {
		return <div></div>;
	}
	return (
		<div>
			<Typography.Title level={2}>Home</Typography.Title>
			<Typography.Paragraph>
				Welcome to the dashboard! Here you can see the status of your
				bot and configure it to your liking.
			</Typography.Paragraph>
			<Space direction="vertical">
				<Typography.Title level={4}>
					Bot @{currentBot.USERNAME}
				</Typography.Title>
				<p>Users</p>
				<p>Total users : 2000</p>
			</Space>
		</div>
	);
};

export default Dashboard;
