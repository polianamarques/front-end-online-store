import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { id, price, title, thumbnail } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
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
