import React from 'react';
import { Alert } from 'react-bootstrap';

import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Alert variant="success">
            You are Login
        </Alert>
    }
    return (
        <Route {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}>

        </Route>
    );
};

export default PrivateRoute;