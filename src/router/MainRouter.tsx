import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import App from "../App";
export default function MainRouter() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <main>
                            <Navbar/>
                            <App/>
                        </main>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}