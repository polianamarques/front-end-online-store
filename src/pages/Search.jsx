import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProductsList from '../components/ProductsList';
import CategoryList from '../components/CategoryList';
import { getCategories } from '../services/api';
import CartButton from '../components/CartButton';
import styles from './Search.module.css';

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
    const {
      search,
      handleChange,
      productsList,
      handleClick,
      addProductToCart,
    } = this.props;
    const { categories } = this.state;

    return (
      <div className={ styles.searchContainer }>
        <header>
          <CartButton />
          <form>
            <label htmlFor="search">
              <input
                className={ styles.inputSearch }
                data-testid="query-input"
                name="search"
                id="search"
                type="text"
                placeholder="Digite o nome do produto"
                value={ search }
                onChange={ handleChange }
              />
            </label>
            <Button
              className={ styles.searchButton }
              icon={ <SearchOutlined /> }
              data-testid="query-button"
              name="search-button"
              type="button"
              onClick={ handleClick }
            />
            {/* <button
            data-testid="query-button"
            name="search-button"
            type="button"
            onClick={ handleClick }
          >
            Pesquisar
          </button> */}
          </form>
        </header>
        <CategoryList
          list={ categories }
          handleClick={ handleClick }
        />
        <section className={ styles.searchSection }>
          {
            productsList === undefined
              ? <p>Nenhum produto foi encontrado</p>
              : (
                <ProductsList
                  productsList={ productsList }
                  addProductToCart={ addProductToCart }
                />
              )
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
  addProductToCart: PropTypes.func.isRequired,
};

export default Search;
