import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Layout from './Layout';
class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
