// addToCart
export const addToCart = (id, count, flavour) => (
    {
      type: 'ADD_TO_CART',
      id,
      count,
      flavour
    }
  );
  
  // removeFromCart
  export const removeFromCart = (id, flavour) => (
    {
      type: 'REMOVE_FROM_CART',
      id,
      flavour
    }
  );
  
  // updateCartItem
  export const updateCartItem = (id, count, flavour) => (
    {
      type: 'UPDATE_CART_ITEM',
      id,
      count,
      flavour
    }
  );
  
  // removeStockItem
  export const removeStockItem = (id, count, flavour) => (
    {
      type: 'REMOVE_STOCK_ITEM',
      id,
      count,
      flavour
    }
  );
  