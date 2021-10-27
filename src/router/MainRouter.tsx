import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "../App";
import NavigationBar from "../NavigationBar";

export default function MainRouter() {


    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <main>
                        <NavigationBar></NavigationBar>
                        
                        
                        </main>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}