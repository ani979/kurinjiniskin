import React from 'react'
import {connect} from 'react-redux'
import {updateCartItem, removeFromCart, removeStockItem} from '../../actions'
import {Cart} from './Cart'

export const CartContainer = 
  connect(
    (state, ownProps) => (
      {
        cart: state.cart.map(cartItem => {
          console.log("cartItem ", cartItem)
          const item = state.stock.find(stockItem => (cartItem.id === stockItem.id));
          return {
            id: cartItem.id,
            price: item.price,
            flavour:item.flavour,
            name: item.name,
            count: cartItem.count,
            stockCount: item.count,
          };
        }),
      }
    ),
    (dispatch) => (
      { 
        onQtyChange: (e, id) => {
          dispatch(updateCartItem(id, cartGetSelectedValue(e)));
        },
  
        onRemoveClick: (e, id, flavour) => {
          e.preventDefault();
          dispatch(removeFromCart(id, flavour));
        },
  
        dispatch: (reducer) => dispatch(reducer),
      }
    ),
    (stateProps, dispatchProps, ownProps) => (
      Object.assign({}, ownProps, stateProps, dispatchProps, {
        onPayClick: () =>
          stateProps.cart.map(item => {
            // dispatchProps.dispatch(removeStockItem(item.id, item.count, item.flavour));
            dispatchProps.dispatch(removeFromCart(item.id, item.flavour));
          }),
      })
    )
  )(Cart);


  const cartGetSelectedValue = (e) => (
    e.target.value
  );