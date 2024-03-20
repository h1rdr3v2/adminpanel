import React, { useEffect, useState } from 'react';
import { Typography, Table, Spin } from 'antd';
import { useBot } from '../contexts/BotContext';
import useHistory from '../hooks/useHistory';

const History = () => {
  const { currentBot } = useBot();
  const { loading, getHistory } = useHistory();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (currentBot) {
        const data = await getHistory(currentBot.TOKEN);
        const newdata = data.result.map((item, index) => ({
          key: index,
          date: item.with_date,
          address: item.withdraw_to,
          amount: parseFloat(item.amount),
          currency: item.coin,
          status: item.status.charAt(0).toUpperCase() + item.status.slice(1),
        }));

        setHistory(newdata);
      }
    };
    fetchHistory();
  }, [currentBot]);

  if (!currentBot) {
    return <div></div>;
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    {
      key: 0,
      date: '2021-10-01',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0001,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 1,
      date: '2021-10-02',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0002,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 2,
      date: '2021-10-03',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',

      amount: 0.0003,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 3,
      date: '2021-10-04',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0004,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 4,
      date: '2021-10-05',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0005,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 5,
      date: '2021-10-06',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',

      amount: 0.0006,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 6,
      date: '2021-10-07',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0007,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 7,
      date: '2021-10-08',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0008,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 8,
      date: '2021-10-09',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.0009,
      currency: 'BTC',
      status: 'Pending',
    },
    {
      key: 9,
      date: '2021-10-10',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      amount: 0.001,
      currency: 'BTC',
      status: 'Pending',
    },
  ];

  return (
    <div>
      <Typography.Title level={2}>Last 10 Withdrawal History</Typography.Title>
      <Spin spinning={loading}>
        {history ? (
          <Table
            columns={columns}
            dataSource={history}
            pagination={false}
            bordered
            size="middle"
            style={{ marginTop: 16 }}
          />
        ) : null}
      </Spin>
    </div>
  );
};

export default History;
