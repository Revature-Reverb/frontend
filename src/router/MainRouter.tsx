import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/Landing";
import { useAppDispatch } from "../app/hooks";
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
          <Route path="/profile/:id">
            <ProfilePage beep={false}/>
          </Route>
          <Route path="/profile">
            <ProfilePage beep={true}/>
          </Route>
          <Route path="/editProfile">
            <EditProfilePage/>
          </Route>
          <Route path="/logout">
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
