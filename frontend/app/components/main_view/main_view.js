import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';


export default class MainView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.main}>Hello World</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    marginTop: 200,
    alignItems: 'stretch',
  },
});
