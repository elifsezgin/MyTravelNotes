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
        <Image style={styles.image} source={require("./images/note.jpg")}>
        <SignUp />
        <Text style={styles.instructions}>
        </Text>
        <Text style={styles.instructions}>
        </Text>
      </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'stretch',
    width: "100%",
    height: "100%",
    zIndex: -10,
    opacity: 0.5,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('MyTravelNotes', () => MyTravelNotes);
