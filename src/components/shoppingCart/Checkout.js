import React from 'react'
import PropTypes from 'prop-types'

// PayButton
export const Checkout = ({ onPayClick }) => (
  <button
    type='button'
    className='cart-pay-button'
    onClick={() => onPayClick()}
  >
    Pay now
  </button>
);

Checkout.PropTypes = {
  onPayClick: PropTypes.func.isRequired,
};

