/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useBot } from './contexts/BotContext.jsx';
import { useAuth } from './contexts/AuthContext.jsx';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export function AuthenticatedRoute({ component: Component, redirectTo }) {
  const { currentBot } = useBot();
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to={!currentBot ? '/select-bot' : redirectTo} />
  ) : (
    <Component />
  );
}
