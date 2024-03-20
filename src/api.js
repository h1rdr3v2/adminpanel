import axios from 'axios';
import Cookies from 'js-cookie';
const prod = ' https://faucetbot.emmanuelshiba.com/api';
const api = axios.create({
  baseURL: prod,
  withCredentials: true,
  timeout: 1000,
  timeoutErrorMessage: 'Request time out, please try again',
});

api.defaults.headers.post['Content-Type'] = 'application/json';

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      Cookies.remove('loggedIn');
      localStorage.removeItem('bot');
      window.location.href = '/logout';
    }
    return Promise.reject(error);
  },
);

export default api;
