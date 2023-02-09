import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Search';

class App extends React.Component {
  state = {
    search: '',
    productsList: [],
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search, productsList } = this.state;
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
        </Switch>
      </div>
    );
  }
}

export default App;
