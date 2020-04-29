import React, { Component } from 'react';
import Navigation from './Navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './Reducers/ConfigureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}

