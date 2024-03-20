import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useBot } from '../contexts/BotContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { clearBot } = useBot();
  logout();
  clearBot();
  window.location.href = '/';
  return <></>;
};

export default Logout;
