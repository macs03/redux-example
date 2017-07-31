import { products, cart } from '../reducers';

describe('Products', () => {
  it('returns initial state', () => {
    expect(products(undefined, {})).toEqual([]);
  });
  it('receive products', () => {
    const productList = [
      {
        id: 1,
        name: "product1",
        price: 100,
        image: ""
      }
    ];

    expect(
      products([], { type: "REPLACE_PRODUCTS", products: productList }))
      .toEqual(productList);

  });
});