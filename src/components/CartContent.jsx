import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartContent extends Component {
  render() {
    const { title, price, thumbnail, quantity, id, handleButtonAdd } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <h3>{ price }</h3>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
        <section>
          <button
            data-testid="product-increase-quantity"
            value={ id }
            onClick={ handleButtonAdd }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            value={ id }
          >
            -
          </button>
          <button
            data-testid="remove-product"
            value={ id }
          >
            Remover item
          </button>
        </section>
      </div>
    );
  }
}

CartContent.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleButtonAdd: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartContent;
