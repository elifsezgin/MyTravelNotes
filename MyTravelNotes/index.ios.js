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
  Image,
  NavigatorIOS
} from 'react-native';
// import SignUp from './app/components/session/signup';
// import LogIn from './app/components/session/login';
import Session from './app/components/session/session';

export default class MyTravelNotes extends Component {
  render() {
    return (
        <NavigatorIOS
          initialRoute={{
            component: Session,
            title: 'My Travel Notes'
          }}
          style={{flex: 1, backgroundColor: '#259ebc'}}
        />
    );
  }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Image style={styles.image} source={require("./images/travel.jpg")}>
  //       <Session navigator={navigator} />
  //     </Image>
  //     </View>
  //   );
  // }
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
});

AppRegistry.registerComponent('MyTravelNotes', () => MyTravelNotes);
