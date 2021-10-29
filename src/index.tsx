import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Stack from 'react-bootstrap/Stack';
import { Grid } from '@material-ui/core';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/testPage';
import EditProfilePage from './pages/EditProfilePage';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Stack direction={"horizontal"} gap={5}>
        <Navbar/>
        <Grid container direction="column" alignItems="center">
          <Router>
            <Switch>
              <PrivateRoute path="/ProfilePage" component={ProfilePage}>
                <ProfilePage/>
              </PrivateRoute>
              <PrivateRoute path="/editProfile" component={EditProfilePage}>
                <EditProfilePage/>
              </PrivateRoute>
              <PrivateRoute path="/" component={TestPage}>
                <TestPage/>
              </PrivateRoute>
            </Switch>
          </Router>
        </Grid>
      </Stack>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
