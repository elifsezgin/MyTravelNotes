import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import SignUpContainer from './signup_container';
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
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../../images/travel.jpg")}>
      <View style={styles.inputForm}>
        <View style={styles.switch}>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => this.setState({status: 'LogIn'})}>
          <Text style={styles.buttonText}>
                Log in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style= {styles.switchButton}
              onPress={() => this.setState({status: 'SignUp'})}>
            <Text style={styles.buttonText}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.status === 'SignUp' ? <SignUpContainer /> : <LogIn /> }
      </View>
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
    alignItems: 'center',
    width: '50%',
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "AvenirNext-Regular"
  }
});
