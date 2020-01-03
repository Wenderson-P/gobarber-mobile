import axios from 'axios';

const api = axios.create({
  baseURL: 'htpp://192.168.0.110:3333',
});

export default api;
