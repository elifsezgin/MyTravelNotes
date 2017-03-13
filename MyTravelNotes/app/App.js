/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import configureStore from './store/store';
import { Router, Scene } from 'react-native-router-flux';
import Session from './components/session/session';

let store = configureStore();
window.store = store;

export default class App extends Component {
  render() {
    return (
        <Provider store={store} >
          <Router>
            <Scene key="loader" component={Session} title="session" hideNavBar={true} initial />
          </Router>
      </Provider>
    );
  }
}
