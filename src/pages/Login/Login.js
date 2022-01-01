import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        console.log(loginData.email, loginData.password);

    }


    return (
        <div >
            <body className="bg-account-pages pt-5">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="p-4">
                                <div className="card overflow-hidden mt-2">
                                    <div className="text-center bg-primary position-relative">
                                        <div className="img-overlay"></div>
                                        <div className="position-relative pt-4 py-5 mb-1">
                                            <h5 className="text-white">Welcome!</h5>
                                            <p className="text-white-50 mb-0 fs-14">Sign in to Continue to Hero Rider</p>
                                        </div>
                                    </div>
                                    <div className="card-body position-relative">
                                        <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                            <form onSubmit={handleLoginSubmit}>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="user name">Email</label>
                                                    <input type="email" onChange={handleOnChange}
                                                        name="email"
                                                        className="form-control" id="user name" placeholder="Enter Email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="user name">Email</label>
                                                    <input type="password" onChange={handleOnChange}
                                                        name="password"
                                                        className="form-control" placeholder="Enter Password" />
                                                </div>
                                                <div className="mt-4">
                                                    <button className="btn btn-primary w-100" type="submit">Log in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-2 text-center text-success">
                                    <p>Don't have an account ? <br/> <Link className="fw-bold text-success" as={Link} to="/riderSignup">For Rider </Link> 
                                        <Link className="fw-bold text-primary" as={Link} to="/lernerSignup">For Learner</Link>
                                    </p>
                                    {
                                        isLoading && <div className="text-center p-5">
                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Loading...
                                            </Button>
                                        </div>
                                    }
                                    {
                                        user?.email && <Alert variant="success">
                                            This is a  alert—check it out!
                                        </Alert>
                                    }

                                    {
                                        authError && <Alert variant="danger">
                                            {authError}
                                        </Alert>
                                    }
                                    {
                                        user?.email && <Alert variant="success">
                                            You are Login
                                        </Alert>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </body>
        </div>
    );
};

export default Login;