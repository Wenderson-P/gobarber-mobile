import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.tk',
});

export default api;
