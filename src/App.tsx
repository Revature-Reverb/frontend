import React from 'react';
import './App.css';
import { Stack } from 'react-bootstrap';
import MainRouter from './router/MainRouter';
import Navbar from './components/Navbar';
import { useAppSelector } from './app/hooks';

const App = () => {

  const loggedIn = useAppSelector(state => state.auth.authorized);
  return (
    <div className="App">
      <Stack direction="horizontal" gap={5}>
        <Navbar loggedIn={loggedIn}/>
        <div className="justify-content-center" style={{width:"100%", height:"100vh", overflowY:"scroll"}} >
          <MainRouter loggedIn={loggedIn}/>
        </div>
      </Stack>
    </div>
  );
}

export default App;
