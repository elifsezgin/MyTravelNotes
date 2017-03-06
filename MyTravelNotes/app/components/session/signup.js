import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      image_url: "",
      password: ""
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>SignUp
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 200,
    backgroundColor: 'transparent',
  },
});
