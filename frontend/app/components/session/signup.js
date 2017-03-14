import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import MainView from "../main_view/main_view";

import {connect} from 'react-redux';
import {signup, login} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      image_url: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.image_url === "") {
      this.state.image_url = "http://res.cloudinary.com/datsbxfvs/image/upload/v1488931829/default_avatar_byjrz7.png";
    }
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => {
      Actions.home();
    });
  }

  render() {
    return (
      <View style={styles.inputForm}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({first_name: text})}
  					value={this.state.firstName}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
  					style={styles.signupInput}
            autoCorrect={false}
  					onChangeText={(text) => this.setState({last_name: text})}
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
});
