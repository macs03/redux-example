import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../actionCreator';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

export const ProductList = (props) => {
  return (
    <div style={styles.products}>
      {props.products.map(product =>
        <div className="thumbnail product" style={styles.product} key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="caption">
            <h4>{product.name}</h4>
            <p>
              <Button id={"product-" + product.id} bsStyle="primary" onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
