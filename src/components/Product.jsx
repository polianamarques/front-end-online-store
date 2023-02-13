import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, price, title, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/productDetails/${id}/${price}/${title}/${thumbnail}` }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </Link>
        <p>{ title }</p>
        <p>
          R$
          <span>{ price }</span>
        </p>
        <button value={ id }>Adicionar ao carrinho</button>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Product;
