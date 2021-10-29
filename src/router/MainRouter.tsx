import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import CreatePost from "../pages/createPost";
import Feed from "../pages/feed";
import Profile from "../pages/profile";
import Search from "../pages/search";
import Event from "../pages/event";
import Login from "../pages/login";
import Register from "../pages/register";
import Friends from "../pages/friends";
import Chat from "../pages/chat";
import Settings from "../pages/settings";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from '../slices/authSlice'
export default function MainRouter(props: any) {

  const history = useHistory();

  // const [loggedIn, setLoggedIn] = useState(true);

  const loggedIn = useAppSelector(state => state.auth.authorized);
  
  const dispatch = useAppDispatch();

  const doLogout = () => {
    dispatch(logout());
    history.push("/")
  }

  let toReturn = <></>;
  console.log("LoggedIn variable: ", loggedIn);
  if (loggedIn) {
    toReturn =
      <div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/create_post">
            <CreatePost />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/logout">
            {doLogout}
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </div>
  }
  else {
    toReturn =
      <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/create_post">
            <CreatePost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
  }
  return (
    <>
      {toReturn}
    </>
  )
}