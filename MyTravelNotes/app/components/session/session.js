import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import SignUp from './signup';
import LogIn from './login';


export default class Session extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: 'SignUp'
    };
  }


  render() {
    return (
      <View style={styles.inputForm}>
        <View style={styles.switch}>
        <View style= {styles.switchButton}>
        <Button
          onPress={() => this.setState({status: 'LogIn'})}
          title="Log In"
          accessibilityLabel="Sign Up"
          color= "#FFFFFF"

          />
          </View>
          <View style= {styles.switchButton}>
            <Button
              style= {styles.switchButton}
              onPress={() => this.setState({status: 'SignUp'})}
              title="Sign Up"
              accessibilityLabel="Sign Up"
              color= "#FFFFFF"
              fontFamily= 'AvenirNext-Regular'
              />
          </View>
        </View>
        {this.state.status === 'SignUp' ? <SignUp /> : <LogIn /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputForm: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "flex-end",
		justifyContent: "flex-end",
    borderTopWidth: 20,
    borderTopColor: "#FFFFFF",
  },
  switch: {
    flexDirection: 'row',
    backgroundColor: '#808080',
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  switchButton: {
    borderBottomColor: "#808080",
    borderBottomWidth: 2,
    width: '50%',
  }
});
