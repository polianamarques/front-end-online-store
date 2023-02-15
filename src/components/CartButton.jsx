import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import vectorCart from '../images/Vector.svg';
import './header.module.css';

export default class CartButton extends Component {
  render() {
    return (
      <header>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ vectorCart } alt="Carrinho de compras" height="32px" />
        </Link>
      </header>
    );
  }
}
