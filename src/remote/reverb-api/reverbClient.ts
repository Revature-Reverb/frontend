import axios from 'axios';

//console.log(process.env.REACT_APP_ENVIRONMENT);
let token = localStorage.getItem("token") || "";

const reverbClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

export const reverbClientWithAuth = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token
  },
  withCredentials: true,
});

export default reverbClient;