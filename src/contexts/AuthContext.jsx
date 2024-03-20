/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedData = JSON.parse(Cookies.get('loggedIn'));
    return !!storedData;
  });

  useEffect(() => {}, []);

  const login = () => {
    Cookies.set('loggedIn', JSON.stringify(true) , {expires: 1})
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('loggedIn')
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
