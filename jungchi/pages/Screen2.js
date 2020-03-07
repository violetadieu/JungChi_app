/* eslint-disable react-native/no-inline-styles */
//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, TouchableOpacity, Image, Button} from 'react-native';
// import all basic components
import RNU from 'react-native-units';
import Navigation from './partyBoard/navigation';
import {NavigationService} from './partyBoard';

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoard: false,
      partyId: 0,
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
