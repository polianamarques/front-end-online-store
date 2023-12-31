import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductToCartButton from './ProductToCartButton';
import styles from './product.module.css';

class Product extends Component {
  render() {
    const { id, price, title, thumbnail, addProductToCart } = this.props;
    return (
      <div data-testid="product" className={ styles.cardProduct }>
        <Link
          to={ `/productDetails/${id}` }
          data-testid="product-detail-link"
        >
          <img
            src={ thumbnail }
            alt={ `Imagem de ${title}` }
            className={ styles.imgProduct }
          />
        </Link>
        <p className={ styles.name }>{ title }</p>
        <p className={ styles.name }>
          R$
          <span className={ styles.price }>{ price }</span>
        </p>
        <ProductToCartButton
          addProductToCart={ addProductToCart }
          id={ id }
          price={ price }
          title={ title }
          thumbnail={ thumbnail }
          testID="product-add-to-cart"
        />
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default Product;
