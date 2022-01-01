import React from 'react';




import './Header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth()


console.log(admin);
    return (
        <div className="header-section " >
            <Navbar bg="dark" fixed="top" expand="lg">
                <Container className="text-center">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {user?.email && admin &&    <Nav.Link as={Link} to="/manageUsers">Manage User</Nav.Link>}
                        </Nav>
                        {user?.email ?
                            <> <Nav className="ms-auto">
                                <Button className="logout-btn" onClick={logOut} >Logout</Button>
                            </Nav>
                            </>
                            :
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>




    );
};

export default Header;