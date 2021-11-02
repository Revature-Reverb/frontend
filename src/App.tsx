import React from 'react';
import './App.css';
import { Stack } from 'react-bootstrap';
import MainRouter from './router/MainRouter';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Stack direction="horizontal" gap={5}>
        <Navbar/>
        <div className="justify-content-center" style={{width:"100%", height:"100vh", overflowY:"scroll"}} >
          <MainRouter/>
        </div>
      </Stack>
    </div>
  );
}

export default App;
