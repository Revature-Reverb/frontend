import axios from 'axios';

//console.log(process.env.REACT_APP_ENVIRONMENT);
let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5NGNmYTAxOTgyMDNlMjgwN2Q4MzRkYmE2MjBlZjczZjI4ZTRlMmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC1yZWR1eC1iYjE5YSIsImF1ZCI6ImF1dGgtcmVkdXgtYmIxOWEiLCJhdXRoX3RpbWUiOjE2MzU5NjQ2NjEsInVzZXJfaWQiOiJMcmUwVmthM0VzZXlkUTRzV2hsc09yR1FIWnExIiwic3ViIjoiTHJlMFZrYTNFc2V5ZFE0c1dobHNPckdRSFpxMSIsImlhdCI6MTYzNTk2NDY2MSwiZXhwIjoxNjM1OTY4MjYxLCJlbWFpbCI6InJoaXNoaXNpa2tAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJoaXNoaXNpa2tAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Z6juqdVfeexhuXFClqp5GyqE-Jja06HoJcJxUVgej0uiA9hdTad1LqIglAnEJ47FhCy76aBAmyvvoW3mzCZqpsXNEthn5fCi5rU1vYk0ZYQ6ktK2CGhPITUca2CCEXY3Vj4OCf7FTcfx-hn07aWGEhRVvKfCdRmEfQ26dA39L-kBDyAALiLrMErYp_oVRM5KWvPPWwYG4LpU2AexzDEpzvI_FOXdgZf_Qu3noVTnMJ3VmefApbbjiYYTPXgvgH9Waw3PInGt-6X7Gbo1kTCKD_0t_F9Ags5_GxxG1AN1A6VVLgMkny20zdMQh50XbwmzmO-l07NQfUL6iJaE3Pe7kQ"

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