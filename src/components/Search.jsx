import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { search, handleChange } = this.props;

    return (
      <div>
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

      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
