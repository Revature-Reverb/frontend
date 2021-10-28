import axios from 'axios';

//console.log(process.env.REACT_APP_ENVIRONMENT);

const reverbClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default reverbClient;