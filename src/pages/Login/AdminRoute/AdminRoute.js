import React from 'react';
import { Alert } from 'react-bootstrap';

import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <Alert variant="success">
            You are Login
        </Alert>
    }
    console.log(admin);
    return (
        <Route {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>}>

        </Route>
    );
};

export default AdminRoute;