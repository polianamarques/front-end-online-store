import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';

class Search extends Component {
  render() {
    const { search, handleChange, productsList, handleClick } = this.props;
    return (
      <div>
        <header>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src="../images/Vector.png" alt="Carrinho de compras" />
          </Link>
        </header>
        <form>
          <label htmlFor="search">
            Busca
            <input
              data-testid="query-input"
              name="search"
              id="search"
              type="text"
              placeholder="Digite o nome do produto"
              value={ search }
              onChange={ handleChange }
            />
          </label>
          <button
            data-testid="query-button"
            name="search-button"
            type="button"
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </form>
        <section>
          {
            productsList === undefined
              ? <p>Nenhum produto foi encontrado</p>
              : <ProductsList productsList={ productsList } />
          }
        </section>

      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  productsList: PropTypes.arrayOf(shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Search;
