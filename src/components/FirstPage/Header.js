import React from 'react'
import './header.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import logo from '../../assets/img/Kurinjini_smallsize.png'

function Header() {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img src = {logo} className = "logo"/></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      
        <Nav>
        <NavItem href="/">
            Home
          </NavItem>
          <NavItem href="/howtoorder">
            How to Order
          </NavItem>
          <NavItem href="/shop">
            Products
          </NavItem>
          <NavItem href="/recycling">
            Recycling
          </NavItem>
          {/* <NavItem href="/faqs">
            FAQs
          </NavItem> */}
        </Nav>
        {/* <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Cart
          </NavItem>
          
        </Nav> */}
        
    </Navbar.Collapse>
    <hr/>
  </Navbar>;
}

export default Header;