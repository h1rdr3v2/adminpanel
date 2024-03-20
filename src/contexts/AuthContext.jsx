import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedData = Cookies.get('loggedIn');
    return storedData ? JSON.parse(storedData) : false;
  });

  const login = () => {
    Cookies.set('loggedIn', JSON.stringify(true), { expires: 1 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('loggedIn');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
