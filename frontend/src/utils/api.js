// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dsm-g03-pi3-2024-1-n0e0.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
