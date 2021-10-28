import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import MainRouter from './router/MainRouter';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import { Stack } from 'react-bootstrap';
import TestComponent from './components/testcomponent';
import TestPage from './pages/testPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Stack direction="horizontal" gap={3}>
        <Navbar/>
          <Switch>
            <Route path="/">
                <TestPage/>       
            </Route>
          </Switch>
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
