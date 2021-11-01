import React from 'react';
import { Route, Redirect,useHistory } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}:any) => {
    return <Route {...rest} render={(props)=>{
        if (localStorage.getItem("token")) {// change to store
            return <Component {...props}/>
        } else {
            return <Redirect to="/login"/>;
        }
    }}/>;
}
export default PrivateRoute;