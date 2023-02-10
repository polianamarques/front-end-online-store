import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartButton from '../components/CartButton';

export default class ProductDetails extends Component {
  render() {
    const { match: { params: { price, title, thumbnail } } } = this.props;
    // id pode ser usado como prop tbm depois para anexar o produto específico no carrinho

    return (
      <div>
        <CartButton />
        Product Details:
        <h2 data-testid="product-detail-name">
          { title }
        </h2>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <h3 data-testid="product-detail-price">
          { price }
        </h3>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      price: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};
