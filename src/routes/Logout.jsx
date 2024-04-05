import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useBot } from "../contexts/BotContext";

const Logout = () => {
  const { logout } = useAuth();
  const { clearBot } = useBot();
  logout();
  clearBot();
  window.location.href = "/";
  return <></>;
};

export default Logout;
