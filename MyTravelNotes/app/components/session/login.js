import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit (e) {
    e.preventDefault();
  }
  handleSwitch (e) {
    e.preventDefault();

  }

  render() {
    return (
      <View style={styles.inputForm}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
  					style={styles.loginInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({email: text})}
  					value={this.state.email}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
  					style={styles.loginInput}
            autoCorrect={false}
            secureTextEntry={true}
  					onChangeText={(text) => this.setState({password: text})}
  					value={this.state.password}/>
        </View>
        <View style={styles.button}>
        <Button
          onPress={this.handleSubmit}
          title="Log in"
          color= "#FFFFFF"
          fontFamily= 'AvenirNext-Regular'
          accessibilityLabel="Log in"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    opacity: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: .5,
    borderColor: '#d8d8d8'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    backgroundColor: 'transparent',
  },
  inputForm: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "stretch",
		justifyContent: "flex-end",
  },
  label: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 5,
    alignItems: 'center',
    width: "40%",
    color: '#808080',
    fontFamily: 'AvenirNext-Regular'
  },
  loginInput: {
    height: 86.5,
		fontSize: 20,
		width: "60%",
    color: '#000000',
    fontFamily: 'AvenirNext-Regular'
	},
  button: {
    backgroundColor: '#9e8fda',
    width: '100%',
    height: 60,
    justifyContent: 'center'
  },
});
