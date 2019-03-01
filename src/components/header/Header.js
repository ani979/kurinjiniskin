import React from 'react'
import './header.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import logo from '../../assets/img/Kurinjini_smallsize.png'
import { Link, hashHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

function Header(props) {
  const getCartButton = () => (
    <div>
      <LinkContainer to="/cart"><NavItem eventKey={6}>Cart ({props.cartItems})</NavItem></LinkContainer>
      
      
      <form
        className='item-add-form'
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit();
        }}>
        <button
          className='item-add-button'
          type='submit'
        >
        Add to cart
       </button>
      </form>
    </div>
  );
    return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src = {logo} className = "logo"/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

      <Navbar.Collapse>
      
        <Nav>
          <LinkContainer exact to ="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer exact to="/aboutus">
            <NavItem eventKey={2}>About Us</NavItem>
          </LinkContainer>
          <LinkContainer exact to="/howtoorder">
            <NavItem eventKey={3}>How to Order</NavItem> 
          </LinkContainer>
          <LinkContainer exact to="/shop">
            <NavItem eventKey={4}>Products</NavItem>
          </LinkContainer>
          <LinkContainer exact to="/recycling">
            <NavItem eventKey={5}>Recycling</NavItem>
          </LinkContainer>
          {/* <LinkContainer exact to="/faqs">
            <NavItem eventKey={5}>FAQs</NavItem>
          </LinkContainer>
          {props.cartButton ? getCartButton() : ''} */}
          <LinkContainer exact to="/gifting">
            <NavItem eventKey={6}>Gifting Ideas</NavItem>
          </LinkContainer>

        </Nav>
        {/* <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Cart
          </NavItem>
          
        </Nav> */}
        
    </Navbar.Collapse>
    <hr/>
  </Navbar>
  {props.children}
  </div>)
}

export default Header;