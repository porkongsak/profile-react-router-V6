import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

export  const NavBar = () => {
    return (
                                        //sticky="top" ทำให้ Navbar อยู่ข้างบน
        <Navbar bg="dark" variant="dark" sticky="top" expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        ReactProtfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}


