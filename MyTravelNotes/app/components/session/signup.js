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
      firstName: "",
      lastName: "",
      email: "",
      image_url: "",
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
        <View style={styles.switch}>
        <View style= {styles.switchButton}>
        <Button
          onPress={this.handleSwitch}
          title="Log In"
          accessibilityLabel="Sign Up"
          color= "#FFFFFF"

          />
          </View>
          <View style= {styles.switchButton}>
        <Button
          style= {styles.switchButton}
          onPress={this.handleSwitch}
          title="Sign Up"
          accessibilityLabel="Sign Up"
          color= "#FFFFFF"
          fontFamily= 'AvenirNext-Regular'
          />
        </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({firstName: text})}
  					value={this.state.firstName}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({lastName: text})}
  					value={this.state.lastName}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({email: text})}
  					value={this.state.email}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
            secureTextEntry={true}
  					onChangeText={(text) => this.setState({password: text})}
  					value={this.state.password}/>
        </View>
        <View style={styles.button}>
        <Button
          onPress={this.handleSubmit}
          title="Sign Up"
          color= "#FFFFFF"
          fontFamily= 'AvenirNext-Regular'
          accessibilityLabel="Sign Up"
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
  signupInput: {
    height: 20,
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
