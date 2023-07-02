import axios from 'axios';

const instance = axios.create({
  baseURL: 'YOUR_API_BASE_URL',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
