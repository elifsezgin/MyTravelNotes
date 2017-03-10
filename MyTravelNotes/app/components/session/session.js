import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
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
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../../images/travel.jpg")}>
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
        {this.state.status === 'SignUp' ? <SignUp navigator={this.props.navigator} /> : <LogIn navigator={this.props.navigator} /> }
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
    borderBottomColor: "#808080",
    borderBottomWidth: 2,
    width: '50%',
  }
});
