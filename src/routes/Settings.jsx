import React from "react";
import { Button, Form, Input, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";

const Settings = () => {
	return (
		<>
			<h1>Settings</h1>
			<Form
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
			>
				<Form.Item label="Enable Tasks">
					<Switch checkedChildren="On" unCheckedChildren="Off" />
				</Form.Item>
				<Form.Item label="User must have username">
					<Switch checkedChildren="On" unCheckedChildren="Off" />
				</Form.Item>
				<Form.Item label="User must do captcha">
					<Switch checkedChildren="On" unCheckedChildren="Off" />
				</Form.Item>
				<Form.Item label="Ref must withdraw">
					<Switch checkedChildren="On" unCheckedChildren="Off" />
				</Form.Item>
				<Form.Item label="Withdrawal Mode">
					<Select
						labelInValue
						defaultValue={{
							value: "faucetpay",
							label: "FaucetPay",
						}}
						style={{
							width: 120,
						}}
						// onChange={handleChange}
						options={[
							{
								value: "faucetpay",
								label: "FaucetPay",
							},
							{
								value: "blockchain",
								label: "Blockchain",
							},
						]}
					/>
				</Form.Item>
				<Form.Item label="Paying Coin">
					<Input type="text" />
				</Form.Item>
				<Form.Item label="Must join channels">
					<TextArea type="text" />
				</Form.Item>
				<Form.Item label="Tg Admins user ids">
					<TextArea type="text" />
				</Form.Item>
				<Form.Item label="FaucetPay token">
					<Input type="text" />
				</Form.Item>
				<Form.Item label="Blockchain token">
					<Input type="text" />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Save
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default Settings;
