import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { message } from 'antd';
import api from '../api';

const useHistory = () => {
  const [loading, setLoading] = useState(null);
  const { logout } = useAuth();

  const getHistory = async (bot_token) => {
    setLoading(true);
    try {
      const response = await api.post(`/bot/${bot_token}/withdrawal/history`);

      return response.data;
    } catch (err) {
      if (err.response.status === 401) {
        message.error('Session expired, please login again');
        logout();
      } else {
        message.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getHistory,
  };
};

export default useHistory;
