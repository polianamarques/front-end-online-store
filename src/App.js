import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  state = {
    search: '',
    productsList: [],
    shoppingCart: [],
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = async ({ target: { value } }) => {
    const { search } = this.state;
    const productsList = await getProductsFromCategoryAndQuery(value, search);
    this.setState({
      productsList: productsList.results,
    });
  };

  addProductToCart = (product) => {
    const { shoppingCart } = this.state;

    this.setState({
      shoppingCart: [...shoppingCart, product],
    });
  };

  render() {
    const { search, productsList, shoppingCart } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/productDetails/:id/:price/:title/:thumbnail"
            component={ ProductDetails }
          />
          <Route
            exact
            path="/"
            render={ () => (<Search
              search={ search }
              handleChange={ this.handleChange }
              productsList={ productsList }
              handleClick={ this.handleClick }
              addProductToCart={ this.addProductToCart }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<Cart
              handleChange={ this.handleChange }
              shoppingCart={ shoppingCart }
            />) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
