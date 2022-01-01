import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import useAuth from '../../../../Hooks/useAuth';


const RiderSignup = () => {

    const { userRegister, user, authError, isLoading } = useAuth()

    const [userdata, setUserdata] = useState();
    const [password, setPassword] = useState()
    const [password1, setPassword1] = useState()


    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userdata };
        newUserData[field] = value;
        const newdata = { ...newUserData, role: 'learner' }
        setUserdata(newdata);
    }



    const handleLoginSubmit = e => {

        e.preventDefault();
        if (password !== password1) {
            alert('Your password did not match');
            return
        }
        userRegister(userdata.email, password, userdata, history);

    }


    return (
        <div className='container mt-5 pt-5'>
            <Form>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" required onChange={handleOnChange} name="displayName" placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" required controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleOnChange} required name="email" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Your Age</Form.Label>
                            <Form.Control onChange={handleOnChange} required='true' name="age" type="number" placeholder="Enter Your Age" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required onChange={handleOnChange} name="address" type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Number</Form.Label>
                            <Form.Control required onChange={handleOnChange} name="number" type="text" placeholder="Enter Your Number" />
                        </Form.Group>


                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                    
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Your Nid Picture</Form.Label>
                                <Form.Control required type="text" onChange={handleOnChange} name="nidImg" placeholder="Nid Image Link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Profile  Picture</Form.Label>
                                <Form.Control required type="text" onChange={handleOnChange} name="profileImg" placeholder="Profile Image Link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Vehicle Type</Form.Label>
                                <Form.Control required onChange={handleOnChange} name="Vehicle Type" type="text" placeholder="car/bike" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control required onChange={e => setPassword1(e.target.value)} name="password1" type="password" placeholder=" Re-Enter Password" />
                            </Form.Group>

                    </div>
                    <div className="col-lg-4 col-md-4 col-12"></div>
                </div>
                <Button onClick={handleLoginSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
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
        </div>
    );
};

export default RiderSignup;