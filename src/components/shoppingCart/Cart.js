import React from 'react'
import PropTypes from 'prop-types'
import {Total} from './Total'
import Checkout from './Checkout'
import {CartItems} from './CartItems'

export const Cart = ({ cart, onQtyChange, onRemoveClick, onPayClick }) => (
    <div className='cart'>
      <h1 className='main-header cart-header'>My Cart</h1>
      <CartItems
        cart={cart}
        onQtyChange={onQtyChange}
        onRemoveClick={onRemoveClick}
      />
      <Total cart={cart} />
      <Checkout onPayClick={onPayClick} />
    </div>
  );
  
  Cart.PropTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      flavour:PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      stockCount: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    onQtyChange: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onPayClick: PropTypes.func.isRequired,
  };