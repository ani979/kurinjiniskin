import React from 'react'
import './header.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import logo from '../../assets/img/Kurinjini_Logo_1.png'

function Header() {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand"><img src = {logo} className = "logo"/></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          Shop
        </NavItem>
        <NavItem eventKey={2} href="#">
          About us
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Cart
        </NavItem>
        
      </Nav>
    </Navbar.Collapse>
    <hr/>
  </Navbar>;
}

export default Header;