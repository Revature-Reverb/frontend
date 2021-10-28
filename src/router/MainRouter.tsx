import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default function MainRouter(props:any) {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <main>
                            {props.children}
                        </main>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}