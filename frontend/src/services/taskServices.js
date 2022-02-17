import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: defaultHeaders,
});

const taskApi = {
  get: (url, headers) => instance.get(url, { headers }),
  post: (url, data, headers) => instance.post(url, data, { headers }),
  put: (url, data, headers) => instance.put(url, data, { headers }),
  delete: (url, headers) => instance.delete(url, { headers }),
};

export default taskApi;