/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import SignUp from './app/components/session/signup';

export default class MyTravelNotes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./images/travel.jpg")}>
        <SignUp />
      </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'stretch',
    width: "100%",
    height: "100%",
    zIndex: -10,
    opacity: 0.8,
  },
});

AppRegistry.registerComponent('MyTravelNotes', () => MyTravelNotes);
