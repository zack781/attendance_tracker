import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';


const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-2 shadow">
        <Container>
            <Navbar.Brand href="/">Attendance Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/view">View</Nav.Link>
                    <Nav.Link href="/stats">Stats</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;