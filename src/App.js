import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';

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

  render() {
    const { search, productsList, shoppingCart } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Search
              search={ search }
              handleChange={ this.handleChange }
              productsList={ productsList }
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
