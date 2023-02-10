import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartButton extends Component {
  render() {
    return (
      <header>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="../images/Vector.png" alt="Carrinho de compras" />
        </Link>
      </header>
    );
  }
}
