import React, { useState } from "react";
import { Button, Form, Switch, Typography, Row, Col, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const { Title } = Typography;

const CreateTask = () => {
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
						Create Task
					</Title>
				</Col>
			</Row>
			<Form
				form={form}
				className="contest-form"
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
					label="Task Button Name"
					name="task_button_name"
					rules={[
						{
							required: true,
							message: "Please enter the task button name",
						},
					]}
				>
					<Input type="text" />
				</Form.Item>
				<Form.Item
					label="Task Description"
					name="task_description"
					rules={[
						{
							required: true,
							message: "Please enter the task description",
						},
					]}
				>
					<TextArea />
				</Form.Item>
				<Form.Item
					label="Task Reward"
					name="task_reward"
					rules={[
						{
							required: true,
							message: "Please enter the task reward",
						},
					]}
				>
					<Input type="number" />
				</Form.Item>
				<Form.Item label="Task Active" name="task_active">
					<Switch />
				</Form.Item>
				<Form.Item label="Task Auto Approve" name="task_autoapprove">
					<Switch />
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

export default CreateTask;
