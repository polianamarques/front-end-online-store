import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductDetails from './pages/ProductDetails';
import './index.css';

class App extends React.Component {
  state = {
    search: '',
    productsList: [],
    shoppingCart: [],
    quantityOnCart: {},
  };

  componentDidMount() {
    const cart = localStorage.getItem('cart');
    const savedProducts = {
      shoppingCart: [],
      quantityOnCart: {},
    };

    const { shoppingCart, quantityOnCart } = cart === null
      ? savedProducts : JSON.parse(cart);
    this.setState({
      shoppingCart,
      quantityOnCart,
    });
  }

  handleStates = (state, value) => {
    this.setState({
      [state]: value,
    });
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

  saveProduct = () => {
    const { quantityOnCart, shoppingCart } = this.state;
    localStorage.setItem('cart', JSON.stringify({ quantityOnCart, shoppingCart }));
  };

  addProductToCart = (product) => {
    const { shoppingCart, quantityOnCart } = this.state;
    const productOnCart = shoppingCart.find(({ id }) => id === product.id);
    if (productOnCart) {
      quantityOnCart[productOnCart.id] += 1;
      this.setState({
        quantityOnCart,
      }, this.saveProduct);
    } else {
      quantityOnCart[product.id] = 1;
      this.setState({
        shoppingCart: [...shoppingCart, product],
        quantityOnCart,
      }, this.saveProduct);
    }
  };

  render() {
    const { search, productsList, shoppingCart, quantityOnCart } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/productDetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addProductToCart={ this.addProductToCart }
            />) }

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
              quantityOnCart={ quantityOnCart }
              handleStates={ this.handleStates }
            />) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
