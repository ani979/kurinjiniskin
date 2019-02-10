import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


 // CartItem
 export const CartItem = (
  { id, name, flavour, price, img, count, stockCount, onQtyChange, onRemoveClick }
) => (
  <li className={'cart-item cart-item-' + id}>
    <Link
      to={'/item/' + id}
      className='cart-item-image-link'
    >
      <img
        className='cart-item-image'
        src={img}
      />
    </Link>
    <div className='cart-item-info'>
      <Link
        to={'/item/' + id}
        className='cart-item-name-link'
      >
        <h1 className='cart-item-name'>
          {name}
        </h1>
      </Link>
      <Link
        to={'/item/' + id}
        className='cart-item-name-link'
      >
        <h1 className='cart-item-name'>
          {flavour}
        </h1>
      </Link>
      <div className='cart-item-value'>
        <span className='cart-item-price'>
          ${price.toFixed(2)}
        </span>
        <span className='cart-item-qty'>
          Qty:
          <select
            className='cart-item-qty-select'
            value={count}
            onChange={(e) => onQtyChange(e, id, flavour)}
          >
            {getOptionsArray(stockCount).map(num =>
              <option
                key={num}
                value={num}
              >
                {num}
              </option>
            )}
          </select>
        </span>
      </div>
    </div>
    <a
      href="#"
      className='cart-item-delete'
      onClick={(e) => {
        onRemoveClick(e, id, flavour);
      }}
    >
      ×
    </a>
  </li>
);

// getOptionsArray
const getOptionsArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(i + 1);
    }
  
    return array;
  };

CartItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  stockCount: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};