/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';

import BoardList from './board/BoardList';
import axios from 'axios';
import RNU from 'react-native-units';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
import RefreshService from './board';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

import Navigation from './board/navigation';
import {NavigationService} from './board';

import AwesomeButton from 'react-native-really-awesome-button';
import Toast from 'react-native-root-toast';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import WriteIcon from 'react-native-vector-icons/FontAwesome5';
import ExitIcon from 'react-native-vector-icons/Octicons';
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
    //alignItems: 'center',
    //justifyContent: 'center',
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
