import React from 'react';
import { Card, Flex, Form, Typography, Button, Input, Alert, Spin } from 'antd';
import useLogin from '../hooks/useLogin';

function Login() {
  const { error, loading, loginUser } = useLogin();
  const handleLogin = async (values) => {
    try {
      await loginUser(values.username, values.licenseKey);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-container">
      <Card className="form-container">
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="loginTitle">
            Login
          </Typography.Title>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}>
              <Input size="large" placeholder="Please enter your username" />
            </Form.Item>
            <Form.Item
              label="License Key"
              name="licenseKey"
              rules={[
                {
                  required: true,
                  message: 'Please input your license!',
                },
              ]}>
              <Input.Password
                size="large"
                placeholder="Please enter your license key"
              />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                block>
                {loading ? <Spin /> : 'Login'}
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Card>
    </div>
  );
}

export default Login;
