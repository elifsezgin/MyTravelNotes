import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
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
      <View style={styles.inputForm}>
        <Text style={styles.welcome}>SignUp</Text>
        <View style={styles.flex}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({firstName: text})}
  					value={this.state.firstName}/>
        </View>
        <View style={styles.flex}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({lastName: text})}
  					value={this.state.lastName}/>
        </View>
        <View style={styles.flex}>
          <Text style={styles.label}>Email</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({email: text})}
  					value={this.state.email}/>
        </View>
        <View style={styles.flex}>
          <Text style={styles.label}>Password</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
            secureTextEntry={true}
  					onChangeText={(text) => this.setState({password: text})}
  					value={this.state.password}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    opacity: 0.7,
    backgroundColor: '#F5F5DC',
    marginBottom: 5,
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
		justifyContent: "center",
  },
  label: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 0,
    alignItems: 'center',
    width: "40%",
  },
  signupInput: {
    height: 20,
		fontSize: 20,
		width: "60%",

	},
});
