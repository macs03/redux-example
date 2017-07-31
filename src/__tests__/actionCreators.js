import { addToCart, loadProducts } from '../actionCreator';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

it('loads products', () => {
  const store = mockStore({ products: [] });
  moxios.stubRequest('http://localhost:3001/products', {
    status: 200,
    response: [
      { id: 1, name: "Product 1", price: 100, image: "" },
      { id: 2, name: "Product 2", price: 200, image: "" }
    ]
  });

  return store.dispatch(loadProducts())
    .then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(1);
      expect(actions[0].type).toBe('REPLACE_PRODUCTS');
      expect(actions[0].products).not.toBeNull();
      expect(actions[0].products.length).toBe(2);
    });

})

it('adds to cart', () => {
  const store = mockStore({ cart: [] });
  const product = {
    id: 1,
    name: "product1",
    price: 100,
    image: ""
  };

  store.dispatch(addToCart(product));

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe('ADD_TO_CART');
  expect(actions[0].product).not.toBeNull();

});