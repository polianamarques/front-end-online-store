import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartContent extends Component {
  render() {
    const { title, price, thumbnail, quantity } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <h3>{ price }</h3>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
      </div>
    );
  }
}

CartContent.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartContent;
