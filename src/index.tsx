import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Stack from 'react-bootstrap/Stack';
import MainRouter from './router/MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        
        <Stack direction="horizontal" gap={5}>
        <Navbar/>
        <div className="justify-content-center" style={{width:"100%", overflowY:"scroll"}} >
            <MainRouter/>
        </div>
        </Stack>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
