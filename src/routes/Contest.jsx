import React, { useState } from "react";
import {
	Button,
	DatePicker,
	Form,
	Select,
	Switch,
	Typography,
	Row,
	Col,
} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Contest = () => {
	const [contest, setContest] = useState(false);
	const [form] = Form.useForm();

	const contestChange = (checked) => {
		console.log(`switch to ${checked}`);
		setContest(checked);
		if (!checked) {
			form.resetFields();
		}
	};

	const onFinish = (values) => {
		console.log("Form values:", values);
		// Handle form submission logic here
	};

	return (
		<div>
			<Row justify="space-between" align="middle">
				<Col>
					<Title level={2} style={{ marginBottom: 0 }}>
						Ref Contest
					</Title>
				</Col>
				<Col>
					<Switch
						onChange={contestChange}
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						style={{ marginLeft: 16 }}
					/>
				</Col>
			</Row>
			<Form
				form={form}
				className="contest-form"
				disabled={!contest}
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					marginTop: 30,
					maxWidth: 600,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					label="Contest ends in"
					name="endDate"
					rules={[
						{
							required: true,
							message:
								"Please select the contest end date and time",
						},
					]}
				>
					<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
				</Form.Item>
				<Form.Item
					label="Ref Contest Rewards"
					name="rewards"
					rules={[
						{
							required: true,
							message: "Please enter the contest rewards",
						},
					]}
				>
					<Select
						suffixIcon={null}
						mode="tags"
						style={{
							width: "100%",
						}}
						placeholder="Enter rewards and press Enter"
						tokenSeparators={[","]}
					/>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Save
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Contest;
