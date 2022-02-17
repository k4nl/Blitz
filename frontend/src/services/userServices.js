import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: defaultHeaders,
});

const userApi = {
  post: (url, data) => instance.post(url, data),
};

export default userApi;