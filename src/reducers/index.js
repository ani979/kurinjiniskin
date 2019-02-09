import { combineReducers } from 'redux'

const cartItem = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          id: action.id,
          count: action.count,
        };
      case 'REMOVE_FROM_CART':
        return state.id !== action.id;
      case 'UPDATE_CART_ITEM':
        if (state.id !== action.id) {
          return state;
        }
  
        return Object.assign(
          {},
          state,
          {
            count: action.count,
          }
        );
      default:
        return state;
    }
  };

  // cart
const cart = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        //console.log(" Am i here?? ", state, action);
        return [
          ...state,
          cartItem(undefined, action),
        ];
      case 'REMOVE_FROM_CART':
        return state.filter(item => cartItem(item, action));
      case 'UPDATE_CART_ITEM':
        return state.map(item => cartItem(item, action));
      default:
        return state;
    }
  };

  // stockItem
const stockItem = (state, action) => {
    switch (action.type) {
      case 'REMOVE_STOCK_ITEM':
        if (state.id !== action.id) {
          return state;
        }
  
        return Object.assign(
          {},
          state,
          {
            count: state.count - action.count,
          }
        );
      default:
        return state;
    }
  };

// stock
const stock = (state = [], action) => {
    switch (action.type) {
      case 'REMOVE_STOCK_ITEM':
        return state.map(item => stockItem(item, action));
      default:
        //console.log("coming in stock?? ", state);
        return state;
    }
  };


export const rootReducers = combineReducers({
    cart,
    stock
  });