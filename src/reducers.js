const reducerInitialState = {
  cart: [],
  products: []
}

const products = (state = reducerInitialState.products, action) => {
  switch (action.type) {
    case "REPLACE_PRODUCTS":
      return state.concat(action.products);
    default:
      return state;
  }
}

const cart = (state = reducerInitialState.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.concat(action.product);
    case "REMOVE_FROM_CART":
      return state.filter(product => product.id !== action.product.id);
    default:
      return state;
  }
}

export { products, cart };