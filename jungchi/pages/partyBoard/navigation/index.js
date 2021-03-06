import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import BoardRead from '../BoardRead';
import BoardList from '../BoardList';
import BoardWrite from '../BoardWrite';
import PartyList from '../PartyList';
const AuthStack = createStackNavigator(
  {
    PartyList: {
      screen: PartyList,
      navigationOptions: {
        headerShown: false,
      },
    },
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
    initialRouteName: 'PartyList',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(AppNavigator);
