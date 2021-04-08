import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (localStorage.getItem("auth") && restricted ? 
    <Redirect to="/dashboard" /> : <Component {...props} />)} />
)


export default PublicRoute;