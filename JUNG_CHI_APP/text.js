import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import E1_HOME from './pages/election/election1/home';
import Search from './pages/election/election1/search';
import Write from './pages/election/election1/write';

import RNU from 'react-native-units';
import Icon from 'react-native-vector-icons/AntDesign';

class Board extends Component {
  toggleDrawer = () => {
    //Props to open/close the drawer

    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon
            name="arrowleft"
            size={RNU.vw(8)}
            color="#FFF"
            style={{marginLeft: RNU.vw(2)}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: E1_HOME,
    navigationOptions: ({navigation}) => ({
      title: '대통령 선거하기',
      headerLeft: <Board navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen1_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
      title: '투표하기',
      headerLeft: <Board navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Write,
    navigationOptions: ({navigation}) => ({
      title: '당별 게시판',
      headerLeft: <Board navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const BottomTabNavigator = createBottomTabNavigator({
  HomeView: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      tabBarLabel: '홈 화면',
    },
  },
  Screen1: {
    screen: Screen1_StackNavigator,
    navigationOptions: {
      tabBarLabel: '글 검색',
    },
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      tabBarLabel: '글 작성',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 40,
    marginRight: 30,
  },
});

export default createAppContainer(BottomTabNavigator);
