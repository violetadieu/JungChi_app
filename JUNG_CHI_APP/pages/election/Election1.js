import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import E1_HOME from './election1/home';
import Search from './election1/search';
import Write from './election1/write';

import RNU from 'react-native-units';
import Back_Icon from 'react-native-vector-icons/Ionicons';
import Home_Icon from 'react-native-vector-icons/Octicons';
import Search_Icon from 'react-native-vector-icons/Entypo';
import Write_Icon from 'react-native-vector-icons/SimpleLineIcons';

class Election1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigationProps.goBack(null)}>
          {/*Donute Button Image */}
          <Back_Icon
            name="ios-arrow-back"
            size={30}
            style={{marginLeft: RNU.vw(5)}}
            color="#FFF"
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
      headerLeft: <Election1 navigationProps={navigation} />,
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
      title: '글 검색',
      headerLeft: <Election1 navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  First: {
    screen: Write,
    navigationOptions: ({navigation}) => ({
      title: '글 작성',
      headerLeft: <Election1 navigationProps={navigation} />,
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
      tabBarIcon: <Home_Icon name="home" size={20} />,
    },
  },
  Screen1: {
    screen: Screen1_StackNavigator,
    navigationOptions: {
      tabBarLabel: '글 검색',
      tabBarIcon: <Search_Icon name="magnifying-glass" size={20} />,
    },
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      tabBarLabel: '글 작성',
      tabBarIcon: <Write_Icon name="pencil" size={20} />,
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
