import axios from 'axios';
//import { getConfigFileParsingDiagnostics } from 'typescript';
import { store } from '../../app/store'

//console.log(process.env.REACT_APP_ENVIRONMENT);
//const workingToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE1MjU1NWEyMjM3MWYxMGY0ZTIyZjFhY2U3NjJmYzUwZmYzYmVlMGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC1yZWR1eC1iYjE5YSIsImF1ZCI6ImF1dGgtcmVkdXgtYmIxOWEiLCJhdXRoX3RpbWUiOjE2MzU5NTk4MzAsInVzZXJfaWQiOiJRMDVsa1JRT091ZXJLZmJzc3dEdnlwRnBteEsyIiwic3ViIjoiUTA1bGtSUU9PdWVyS2Zic3N3RHZ5cEZwbXhLMiIsImlhdCI6MTYzNTk1OTgzMCwiZXhwIjoxNjM1OTYzNDMwLCJlbWFpbCI6ImFsZXguam9obnNvbkByZXZhdHVyZS5uZXQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWxleC5qb2huc29uQHJldmF0dXJlLm5ldCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K5ZWOkKkMTq2VFuWUG9qYurxIW8Yw1wFI_wE3xujWFv4OwtxsAMyoSwKsdyMsAReEjXaiA43ejF0sbEDeDaH_4OOcih8f2tit7DzjIBZLcJDtlWfVoc4VYQHmdLVbyTtflol8bdrrbN5w7wK0DBVZoEyt0_ilu1g6z3caddkSxo-gsqEw_tMmVDpkmJJaVkqe9FZf2r3iZ-852Psnzl9EmYzhGtzK9pKuEbNrqU6bjDWwxU_93MslymdmxL2XN8h1urKOaz88mM52Ld7TJFd_4EpC42IfYWFzvw4BQKv95XySTf3hgDXKf2J7aL56xIU4J5q-2h3Oy1bjHk-k_J-zw";

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
  console.log( "tried setting token = " + token );
  config.headers["Authorization"] = token;
  return config;
} );

export { reverbClient, reverbClientWithAuth };