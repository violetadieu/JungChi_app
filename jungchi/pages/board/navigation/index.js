import {
  createAppContainer,
  createSwitchNavigator,
  TouchableWithoutFeedback,
} from 'react-navigation';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import BoardRead from '../BoardRead';
import BoardList from '../BoardList';
import BoardWrite from '../BoardWrite';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {ReadHeaderButtons, Item} from './ReadHeaderButton';
import RefreshButton from 'react-native-vector-icons/Ionicons';
const AuthStack = createStackNavigator(
  {
    BoardList: {
      screen: BoardList,
      navigationOptions: {
        headerShown: false,
      },
    },
    BoardRead: {
      screen: BoardRead,
      navigationOptions: {
        gestureEnabled: true,
        title: '',
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      },
    },
    BoardWrite: {
      screen: BoardWrite,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'BoardList',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const styles = StyleSheet.create({
  Button: {
    fontSize: 25,
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(AppNavigator);
