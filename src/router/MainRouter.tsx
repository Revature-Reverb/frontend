import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
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
export default function MainRouter(props:any) {

    const [loggedIn, setLoggedIn] = useState(true);

    const history = useHistory();

    const doLogout = () => {
        
        setLoggedIn(false)
        history.push("/")
    }

    const doLogin = () => {
        
        setLoggedIn(true)
        history.push("/")
    }
    let toReturn = <></>;
    if(loggedIn)
    {
    toReturn = 
        <div>
            <Switch>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/create_post">
                    <CreatePost/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/event">
                    <Event/>
                </Route>
                <Route path="/chat">
                    <Chat/>
                </Route>
                <Route path="/settings">
                    <Settings/>
                </Route>
                <Route path="/friends">
                    <Friends/>
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
                <Route path="/">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/create_post">
                    <CreatePost/>
                </Route>                
                <Route path="/login">
                    {doLogin}
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