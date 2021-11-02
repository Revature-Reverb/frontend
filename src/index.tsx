import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import SubmitPost from './components/SubmitPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';

import MainRouter from './router/MainRouter';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import SubmitComment from './components/SubmitComment';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Changing this for development purposes:
      change back to <App /> for default react-redux */}
      <Post />
    {/* <Router>
                <Switch>
                    <Route path="/">
                        <main>
                        <Navbar/>
                        </main>
                    </Route>
                </Switch>
            </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
