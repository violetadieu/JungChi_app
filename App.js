/* eslint-disable react-native/no-inline-styles */

/*
  각 화면을 모두 createStackNavigator 로 선언해 놓았음.
  ctrl + F -> 'DrawerNavigator'
*/

import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import RNU from 'react-native-units';

import MainPage from './pages/MainPage';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';

import Election1 from './pages/election/Election1';
import Election2 from './pages/election/Election2';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer

    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{width: 30, height: 30, marginLeft: 12}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: MainPage,
    navigationOptions: ({navigation}) => ({
      title: '다람쥐를 국회로',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: '투표하기',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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
    screen: Screen2,
    navigationOptions: ({navigation}) => ({
      title: '당별 게시판',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: '시사 게시판',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: Screen4,
    navigationOptions: ({navigation}) => ({
      title: '자유 게시판',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const fade = props => {
  const {position, scene} = props;

  const index = scene.index;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3],
  });

  return {
    opacity,
    transform: [{translateX}, {translateY}],
  };
};

const Election1_StackNavigator = createStackNavigator(
  {
    election1: {
      screen: Election1,
      navigationOptions: ({navigation}) => ({
        title: '대통령 선거하기',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#660099',
        },
        headerTintColor: '#fff',
      }),
    },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: props => {
        return fade(props);
      },
    }),
  },
);

const Election2_StackNavigator = createStackNavigator({
  election1: {
    screen: Election2,
    navigationOptions: ({navigation}) => ({
      title: '국회의원 선거하기',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#660099',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    //Drawer Options and indexing
    MainPage: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'HOME',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./image/navigation_menu_0.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Screen1: {
      //Title
      screen: Screen1_StackNavigator,
      navigationOptions: {
        drawerLabel: '투표하기',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./image/navigation_menu_1.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Screen2: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: '당별 게시판',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./image/navigation_menu_2.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Screen3: {
      //Title
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: '시사 게시판',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./image/navigation_menu_3.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Screen4: {
      //Title
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: '자유 게시판',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./image/navigation_menu_4.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },

    // 두 옵션은 보이지 않도록 해놓음.
    Election1: {
      screen: Election1_StackNavigator,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    Election2: {
      screen: Election2_StackNavigator,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
  },
  {
    contentComponent: props => (
      <SafeAreaView style={styles.container}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('./image/navigation_header.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              flexDirection: 'column',
              height: 100,
              marginLeft: 0,
              alignItems: 'center',
              width: RNU.gs(28),
            }}
          />
          <Text style={{position: 'absolute', fontSize: 30, color: 'white'}}>
            환영합니다
          </Text>
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    ),
    drawerLockMode: 'unlocked',
  },
);

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

export default createAppContainer(DrawerNavigator);
