import React, { useEffect } from "react";
import { Button, Form, InputNumber, Spin } from "antd";
import { useBot } from "../contexts/BotContext";
import useBotCommission from "../hooks/useBotCommission";

const Commissions = () => {
	const { currentBot } = useBot();
	const { loading, getCommissions, setCommissions } = useBotCommission();

	const [form] = Form.useForm();

	useEffect(() => {
		const fetchCommissions = async () => {
			if (currentBot) {
				const data = await getCommissions(currentBot.TOKEN);
				const parsedCommissions = JSON.parse(data.COMMISSIONS);
				form.setFieldsValue(parsedCommissions);
			}
		};
		fetchCommissions();
	}, [currentBot]);

	const handleSubmit = async (values) => {
		await setCommissions(currentBot.TOKEN, values);
	};

	if (!currentBot) {
		return <div></div>;
	}

	return (
		<>
			<h1>Commissions</h1>
			<Spin spinning={loading}>
				<Form
					form={form}
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					style={{
						marginBlock: 30,
						maxWidth: 600,
					}}
					onFinish={handleSubmit}
				>
					<Form.Item label="Reward Per Ref" name="ref_reward">
						<InputNumber style={{ minWidth: "90%" }} />
					</Form.Item>
					<Form.Item label="Daily Bonus" name="daily_bonus">
						<InputNumber style={{ minWidth: "90%" }} />
					</Form.Item>
					<Form.Item label="Registration Bonus" name="register_bonus">
						<InputNumber style={{ minWidth: "90%" }} />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Save
						</Button>
					</Form.Item>
				</Form>
			</Spin>
		</>
	);
};

export default Commissions;
