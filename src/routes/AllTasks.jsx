import React, { useState } from 'react';
import { Form, Switch, Spin, Table, Typography } from 'antd';
import { useBot } from '../contexts/BotContext';

const { Title } = Typography;

const AllTasks = () => {
  const { currentBot } = useBot();

  if (!currentBot) {
    return <div></div>;
  }

  return (
    <div>
      <Title level={2} style={{ marginBottom: 0 }}>
        All Tasks
      </Title>
      {/* <Spin spinning={loading}>
				
			</Spin> */}
    </div>
  );
};

export default AllTasks;
