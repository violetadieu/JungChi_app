//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
// import all basic components

import Tabbar from 'react-native-tabbar-bottom';

export default class Election1 extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> election 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
