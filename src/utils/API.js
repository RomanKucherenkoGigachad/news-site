import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
API.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = localStorage.getItem('token');
    if (token) {
      headers.Authorization = `JWT ${token}`;
    }
    headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error),
);
export default API;
