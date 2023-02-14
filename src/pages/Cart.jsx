import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartContent from '../components/CartContent';

export default class Cart extends Component {
  handleButtonAdd = ({ target: { value } }) => {
    const { quantityOnCart, handleStates } = this.props;
    quantityOnCart[value] += 1;
    handleStates('quantityOnCart', quantityOnCart);
  };

  handleRemoveButton = ({ target: { value } }) => {
    const { quantityOnCart, handleStates } = this.props;
    if (quantityOnCart[value] > 1) {
      quantityOnCart[value] -= 1;
    }
    handleStates('quantityOnCart', quantityOnCart);
  };

  removeProduct = ({ target: { value } }) => {
    const { shoppingCart, handleStates } = this.props;
    const filter = shoppingCart.filter(({ id }) => id !== value);
    handleStates('shoppingCart', filter);
  };

  render() {
    const { shoppingCart, quantityOnCart } = this.props;
    return (
      <ul>
        {
          shoppingCart.length === 0
            ? (
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            )
            : shoppingCart.map((product) => (
              <li key={ product.id }>
                <CartContent
                  { ...product }
                  quantity={ quantityOnCart[product.id] }
                  handleButtonAdd={ this.handleButtonAdd }
                  handleRemoveButton={ this.handleRemoveButton }
                  removeProduct={ this.removeProduct }

                />
              </li>
            ))
        }
      </ul>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  quantityOnCart: PropTypes.objectOf(PropTypes.number).isRequired,
  handleStates: PropTypes.func.isRequired,
};
