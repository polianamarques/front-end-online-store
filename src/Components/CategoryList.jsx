import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => (
            <button key={ item.id } data-testid="category">{item.name}</button>
          ))
        }
      </div>
    );
  }
}

CategoryList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default CategoryList;
