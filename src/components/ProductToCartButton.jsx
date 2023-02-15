import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './productToCartButton.module.css';

class ProductToCartButton extends Component {
  render() {
    const { addProductToCart, id, price, title, thumbnail, testID } = this.props;
    return (
      <div>
        <Button
          className={ styles.button }
          type="primary"
          block
          value={ id }
          data-testid={ testID }
          onClick={ () => addProductToCart({ id, price, title, thumbnail }) }
        >
          Adicionar ao carrinho
        </Button>
        {/* <button
          value={ id }
          data-testid={ testID }
          onClick={ () => addProductToCart({ id, price, title, thumbnail }) }
        >
          Adicionar ao carrinho
        </button> */}
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
