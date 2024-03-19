import React from "react";
import { Button, Form, Spin, Typography, Row, Col, Input, Table } from "antd";
import TextArea from "antd/es/input/TextArea";

const { Title } = Typography;

const GlobalMessage = () => {
	const [loading, setLoading] = React.useState(false);
	const onFinish = (values) => {
		console.log("Form values:", values);
		// Handle form submission logic here
	};
	const columns = [
		{
			title: "Message",
			dataIndex: "message",
			key: "message",
		},
		{
			title: "Media",
			dataIndex: "media",
			key: "media",
		},
		{
			title: "Sent To",
			dataIndex: "sent_to",
			key: "sent_to",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
	];
	const data = [
		{
			key: 0,
			message: "Blahhefe fe fef ef f ef rfgrgr ",
			sent_to: "400/100,000 users",
			media: "None",
			status: "Sending",
		},
		{
			key: 2,
			message: "Blahhefe fe fef ef f ef rfgrgr ",
			sent_to: "470/100,000 users",
			status: "Sending",
			media: "None",
		},
		{
			key: 3,
			message: "Blahhefe fe fef ef f ef rfgrgr ",
			sent_to: "100,000/100,000 users",
			status: "Complete",
			media: "None",
		},
		{
			key: 4,
			message: "Blahhefe fe fef ef f ef rfgrgr ",
			sent_to: "100,000/100,000 users",
			status: "Complete",
			media: "None",
		},
		{
			key: 5,
			message: "Blahhefe fe fef ef f ef rfgrgr ",
			sent_to: "100,000/100,000 users",
			status: "Complete",
			media: "None",
		},
	];
	return (
		<div>
			<Row justify="space-between" align="middle">
				<Col>
					<Title level={2} style={{ marginBottom: 0 }}>
						Send Global Message
					</Title>
				</Col>
			</Row>
			<Form
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
					label="Message"
					name="message"
					rules={[
						{
							required: true,
							message: "Please enter the global message",
						},
					]}
				>
					<TextArea />
				</Form.Item>
				<Form.Item label="Media URL" name="media">
					<Input type="text" />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Send
					</Button>
				</Form.Item>
			</Form>
			<Title level={2} style={{ marginBottom: 0 }}>
				Pending Global Message
			</Title>
			<Spin spinning={loading}>
				<Table
					columns={columns}
					dataSource={data}
					pagination={false}
					bordered
					size="middle"
					style={{ marginTop: 16 }}
				/>
			</Spin>
		</div>
	);
};

export default GlobalMessage;
