import { Button, Typography, Input, Space } from 'antd';
import React, { useState } from 'react';
// import "./Texts.css";

const { Title } = Typography;
const { TextArea } = Input;

const Texts = () => {
  const [text, setText] = useState('');
  const [layout, setLayout] = useState('');

  const handleSave = () => {
    // Send the text and layout data to the API
    const data = {
      text,
      layout,
    };

    // Make an API call to send the data
    // Replace the URL with your actual API endpoint
    fetch('https://api.example.com/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Data saved successfully:', result);
        // Handle the API response as needed
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        // Handle any errors that occurred during the API call
      });
  };

  return (
    <div className="texts-container">
      <Title level={2}>Texts</Title>
      <TextArea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
      />

      <Title level={3}>Layouts</Title>
      <TextArea
        rows={4}
        value={layout}
        onChange={(e) => setLayout(e.target.value)}
        placeholder="Enter your layout here"
      />

      <Space>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </Space>
    </div>
  );
};

export default Texts;
