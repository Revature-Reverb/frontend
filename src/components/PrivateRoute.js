import React from 'react';
import { Route, Redirect,useHistory } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    let history = useHistory();
    return <Route {...rest} render={(props)=>{
        if (localStorage.getItem("token")) {
            return <Component {...props}/>
        } else {
            return <Redirect to="/login"/>;
        }
    }}/>;
}
export default PrivateRoute;