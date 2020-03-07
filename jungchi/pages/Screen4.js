/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';

import Navigation from './freeBoard/navigation';
import {NavigationService} from './freeBoard';

export default class Screen4 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
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
  MainContainer: {
    flex: 1,

    backgroundColor: 'white',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 'center',
  },
  WriteContainer: {
    backgroundColor: 'white',
    margin: 0,
    marginBottom: 10,
    height: '100%',
  },
  actionButtonIcon: {
    fontSize: 18,
    height: 22,
    color: 'white',
  },
  modal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    height: '100%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalBtn: {
    backgroundColor: 'transparent',
    fontSize: 40,
    margin: 5,
    marginTop: 40,
    marginLeft: 2,
    color: 'rgba(153,50,204,1)',
    flex: 1,
  },
});
