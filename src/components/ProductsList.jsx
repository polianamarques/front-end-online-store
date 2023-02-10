import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsList extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <ul data-testid="product">
        {
          productsList.length === 0 ? (
            <p data-testid="home-initial-message">
              {' '}
              Digite algum termo
              de pesquisa ou escolha  uma categoria.
            </p>
          ) : productsList
        }
      </ul>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default ProductsList;
