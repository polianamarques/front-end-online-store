import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
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
    const { search, handleChange, productsList, handleClick } = this.props;
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
        <CategoryList list={ categories } />
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
