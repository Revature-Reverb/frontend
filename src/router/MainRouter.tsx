import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "../App";

export default function MainRouter() {


    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <App/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}