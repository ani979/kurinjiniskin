// addToCart
export const addToCart = (id, count) => (
    {
      type: 'ADD_TO_CART',
      id,
      count,
    }
  );
  
  // removeFromCart
  export const removeFromCart = (id) => (
    {
      type: 'REMOVE_FROM_CART',
      id,
    }
  );
  
  // updateCartItem
  export const updateCartItem = (id, count) => (
    {
      type: 'UPDATE_CART_ITEM',
      id,
      count,
    }
  );
  
  // removeStockItem
  export const removeStockItem = (id, count) => (
    {
      type: 'REMOVE_STOCK_ITEM',
      id,
      count,
    }
  );
  