import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Search';

class App extends React.Component {
  state = {
    search: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Search
              search={ search }
              handleChange={ this.handleChange }
            />) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
