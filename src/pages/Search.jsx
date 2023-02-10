import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryList from '../Components/CategoryList';
import { getCategories } from '../services/api';

class Search extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.list();
  }

  list = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { search, handleChange, productsList } = this.props;
    const { categories } = this.state;
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
              name="search"
              id="search"
              type="text"
              placeholder="Digite o nome do produto"
              value={ search }
              onChange={ handleChange }
            />
          </label>
          <button
            name="search-button"
            type="button"
            // onClick={}
          >
            Pesquisar
          </button>
        </form>
        <section>
          {
            productsList.length === 0
              ? (
                <p data-testid="home-initial-message">
                  {' '}
                  Digite algum termo
                  de pesquisa ou escolha uma categoria.
                </p>
              )
              : productsList
          }
        </section>
        <CategoryList list={ categories } />
      </div>
    );
  }
}
// Fazer a validacao da ProductList de forma adequada
Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  productsList: PropTypes.arrayOf(shape()).isRequired,
};

export default Search;
