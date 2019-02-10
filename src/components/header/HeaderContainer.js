import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {addToCart} from '../../actions/index'
import {updateCartItem, removeFromCart, removeStockItem} from '../../actions/index'

   
    const showCartButton = (pathname) => (
        true
        
    );
  
    const HeaderContainer = connect(
        (state, ownProps) => (
            {
                children: ownProps.children,
                cartItems: state.cart.length,
                cartButton: showCartButton(ownProps.pathname),
                
            }
            
            //dispatchProps.dispatch(addToCart("IMM", 5))
          
        ),
        null,
        (stateProps, dispatchProps, ownProps) => {
            //console.log("stateProps.inCart ", stateProps.inCart);
            //const onSubmit = addToCart;

            return Object.assign({}, ownProps, stateProps, dispatchProps, {
                onSubmit: () => {
                    //console.log("coming here ", dispatchProps);
                    dispatchProps.dispatch(addToCart(1, 5));
                },
            });
        }    
    )(Header);

export default HeaderContainer