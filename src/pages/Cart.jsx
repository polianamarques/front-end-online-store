import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <div>
        {
          shoppingCart.length === 0
            ? (
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            )
            : shoppingCart
        }
      </div>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};
