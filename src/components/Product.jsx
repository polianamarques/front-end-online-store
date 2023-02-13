import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, price, title, thumbnail, addProductToCart } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/productDetails/${id}/${price}/${title}/${thumbnail}` } // Tentar resolver o problema da saúde e das ferramentas
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </Link>
        <p>{ title }</p>
        <p>
          R$
          <span>{ price }</span>
        </p>
        <button
          value={ id }
          data-testid="product-add-to-cart"
          onClick={ () => addProductToCart({ id, price, title, thumbnail }) }
        >
          Adicionar ao carrinho
        </button>
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
