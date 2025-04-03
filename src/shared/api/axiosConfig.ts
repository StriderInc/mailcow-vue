import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const instanceAxios = axios.create({
  baseURL: '/api/',
  headers: {
    'X-API-Key': API_KEY,
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export { instanceAxios };
