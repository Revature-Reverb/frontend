import React from "react";
import { Switch, Route } from "react-router-dom";
import CreatePost from "../pages/createPost";
import Feed from "../pages/feed";
import Search from "../pages/search";
import Event from "../pages/event";
import Login from "../pages/login";
import Register from "../pages/register";
import Friends from "../pages/friends";
import Settings from "../pages/settings";
import Landing from "../pages/landing";
import { useAppDispatch } from "../app/hooks";
import { logout } from '../slices/authSlice';
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
          <Route exact path="/event">
            <Event />
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
          {/* <Route path="/" component={TestPage}>
                        <TestPage />
                    </Route> */}
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