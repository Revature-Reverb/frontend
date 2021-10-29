import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "../App";
import NavigationBar from "../components/NavigationBar";
import Navbar from "../components/Navbar";
import ProfileInformation from "../components/ProfileInformation";

export default function MainRouter() {


    return (
        <>
            <Router>
                <Switch>
                        <Navbar/>
                    <Route path="/">
                        <ProfileInformation />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}