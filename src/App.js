import React, { Component } from 'react';
import Login from './component/Login/Login';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Route path="/login" component={Login}></Route>
    );
  }
}

export default App;