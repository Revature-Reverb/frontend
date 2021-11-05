import axios from 'axios';
//import { getConfigFileParsingDiagnostics } from 'typescript';
import { store } from '../../app/store'

//console.log(process.env.REACT_APP_ENVIRONMENT);

const reverbClient = axios.create( {
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
} );

const reverbClientWithAuth = axios.create( {
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ""
  },
  withCredentials: true,
} );

reverbClientWithAuth.interceptors.request.use( function ( config: any )
{
  const token = "" + store.getState().auth[0].token;
  config.headers["Authorization"] = token;
  return config;
} );

export { reverbClient, reverbClientWithAuth };
