import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "../App";
import NavigationBar from "../components/NavigationBar";
import Navbar from "../components/Navbar";

export default function MainRouter() {


    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <main>
                        <Navbar/>
                        
                        
                        </main>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}