import {
  Card,
  Typography,
  Spin,
  Flex,
  Button,
  Modal,
  Form,
  Input,
  message,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useBot } from '../contexts/BotContext';
import { RightCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useSelectBot from '../hooks/useSelectBot';

function SelectBot() {
  const { loading, getBots, createBot } = useSelectBot();
  const { botData, setBot } = useBot();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const navigate = useNavigate();
  const [botToken, setBotToken] = useState('');

  useEffect(() => {
    getBots();
  }, []);

  const handleSelect = (key) => {
    setBot(botData[key]);
    navigate('/user/home');
  };
  const handleOk = async () => {
    if (botToken.trim() === '') {
      message.error('Please enter a bot token');
      return;
    }
    setConfirmLoading(true);

    if (await createBot(botToken)) {
      getBots();
      setModalOpen(false);
      setConfirmLoading(false);
    } else {
      setConfirmLoading(false);
    }
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  return (
    <div className="select-container">
      <Card className="bot-container">
        <Typography.Title level={3} strong>
          Select Bot
        </Typography.Title>
        <Typography.Text>This is the select bot page</Typography.Text>
        <Modal
          title="Enter Bot Token"
          centered
          open={modalOpen}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          flex={1}>
          <Form layout="vertical" autoComplete="off">
            <Form.Item
              label="Bot token"
              name="bot_token"
              rules={[
                {
                  required: true,
                  message: 'Please input the bot token!',
                },
              ]}>
              <Input
                onChange={(e) => setBotToken(e.target.value)}
                type="text"
                placeholder="Enter Bot Token"
              />
            </Form.Item>
          </Form>
        </Modal>
        <div
          style={{
            display: 'flex',
            marginTop: 20,
            flexDirection: 'column',
          }}>
          {loading ? (
            <Spin
              size="large"
              style={{ paddingBlock: 30, alignSelf: 'center' }}
            />
          ) : botData ? (
            botData.map((bot, key) => (
              <Flex
                key={key}
                horizontal="true"
                flex={1}
                onClick={() => handleSelect(key)}
                style={{
                  padding: 10,
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 15,
                  marginBottom: 10,
                  border: '1px dashed black',
                }}>
                <Typography.Title level={4} strong>
                  @{bot.USERNAME}
                </Typography.Title>
                <RightCircleOutlined size={30} />
              </Flex>
            ))
          ) : null}
        </div>
        <Button
          onClick={() => setModalOpen(true)}
          type="default"
          size="large"
          block>
          Create New Bot
        </Button>
      </Card>
    </div>
  );
}

export default SelectBot;
