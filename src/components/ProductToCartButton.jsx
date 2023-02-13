import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductToCartButton extends Component {
  render() {
    const { addProductToCart, id, price, title, thumbnail, testID } = this.props;
    return (
      <div>
        <button
          value={ id }
          data-testid={ testID }
          onClick={ () => addProductToCart({ id, price, title, thumbnail }) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductToCartButton.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  addProductToCart: PropTypes.func,
}.isRequired;

export default ProductToCartButton;
