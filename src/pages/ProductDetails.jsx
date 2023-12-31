import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import { getProductById } from '../services/api';
import ProductToCartButton from '../components/ProductToCartButton';

export default class ProductDetails extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    this.setState({
      product,
    });
  };

  render() {
    const { addProductToCart } = this.props;
    const { product: { id, price, title, thumbnail } } = this.state;

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
        <ProductToCartButton
          addProductToCart={ addProductToCart }
          id={ id }
          price={ price }
          title={ title }
          thumbnail={ thumbnail }
          testID="product-detail-add-to-cart"
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};
