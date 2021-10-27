import React, { Component } from 'react'
import {Nav,NavDropdown} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './reverb_logo2.png'

function navbar()
{
    return (
        <div>
            
            <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"#B9B9BA",
 width: 150, height:"100vh",fontSize:"24px",lineHeight:"100px"}}
            className="justify-content-center">
<Navbar.Toggle aria-controls="responsive-navbar-nav" />


    <Nav className="mr-auto"></Nav>

<Nav defaultActiveKey="/home" className="flex-column">

        <img
          alt=""
          src={Logo}
          width="120"
          height="70"
          className="d-inline-block align-top"
        />
  <Nav.Link href="/home">Home</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="link-3">Link</Nav.Link>
</Nav>
</Navbar>


{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ width: 200, height:"100vh"}}>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">


    <Nav className="mr-auto">
    <Nav.Link href="#features">Features</Nav.Link>

        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Nav>
    </Nav>
</Navbar.Collapse>
</Navbar> */
}
</div>
    );
}
export default navbar;