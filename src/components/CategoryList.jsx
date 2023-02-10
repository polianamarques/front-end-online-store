import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { list, handleClick } = this.props;
    return (
      <aside>
        <ul>
          {
            list.map((item) => (
              <li key={ item.id }>
                <button
                  data-testid="category"
                  value={ item.id }
                  onClick={ handleClick }
                >
                  {item.name}
                </button>
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

CategoryList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default CategoryList;
