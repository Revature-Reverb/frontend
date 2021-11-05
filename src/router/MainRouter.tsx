import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Login from "../pages/login";
import Register from "../pages/register";
import Friends from "../pages/Friends";
import Settings from "../pages/Settings";
import Landing from "../pages/landing";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from '../slices/authSlice'
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";


interface MainRouterProps{
  loggedIn:string
}

const MainRouter:React.FC<MainRouterProps> = ({loggedIn}:{loggedIn:string}) => {
  const dispatch = useAppDispatch();

  // Logout now dispatching to store to update state
  const doLogout = () => {
    dispatch(logout());
  }

  // Login is now handled in the Login page component.

  let toReturn = <></>;
  if (loggedIn) {
    toReturn =
      <div>
        <Switch>
          <Route exact path="/create_post">
            <CreatePost />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route exact path="/profile">
            <ProfilePage/>
          </Route>
          <Route exact path="/editProfile">
            <EditProfilePage/>
          </Route>
          <Route exact path="/logout">
            {doLogout}
          </Route>
          <Route path="/">
            <Feed/>
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
            <Landing />
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

export default MainRouter