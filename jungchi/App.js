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
  ToastAndroid,
  BackHandler,
  Button,
  ImageBackground,
  TouchableHighlight,
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
  constructor(props) {
    super(props);
  }

  // 이벤트 등록
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  // 이벤트 해제
  componentWillUnmount() {
    this.exitApp = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  // 이벤트 동작
  handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000, // 2초
      );
    } else {
      clearTimeout(this.timeout);

      BackHandler.exitApp(); // 앱 종료
    }
    return true;
  };

  //Structure for the navigation Drawer
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
      headerLeft: () =><NavigationDrawerStructure navigationProps={navigation} />,
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
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
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
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
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
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
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
    headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
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
            source={require('./image/navigation_menu/navigation_menu_0.png')}
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
            source={require('./image/navigation_menu/navigation_menu_1.png')}
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
            source={require('./image/navigation_menu/navigation_menu_2.png')}
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
            source={require('./image/navigation_menu/navigation_menu_3.png')}
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
            source={require('./image/navigation_menu/navigation_menu_4.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Election1: {
      screen: Election1,
      navigationOptions: {
        drawerLabel: () => null,
        drawerLockMode: 'locked-closed',
      },
    },
    Election2: {
      screen: Election2,
      navigationOptions: {
        drawerLabel: () => null,
        drawerLockMode: 'locked-closed',
      },
    },
  },
  {
    contentComponent: props => (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#9932CC',
            marginBottom: 0,
          }}>
          <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
            <Image
              source={require('./image/vote_button.png')}
              style={styles.header_image}
            />
            <Text style={{marginTop: RNU.vh(10)}}>OOO님 반갑습니다.</Text>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              console.log('hi');
            }}
            underlayColor="#9932cc">
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: RNU.px(40),
              }}>
              로그인하기
            </Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    ),
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
  button: {
    backgroundColor: '#9932cc',
    overflow: 'hidden',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    height: '15%',
    justifyContent: 'center',
  },
  header_image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: RNU.vw(4),
    marginRight: RNU.vw(3),
    marginTop: RNU.vh(0),
    paddingLeft: 0,
  },
});

export default createAppContainer(DrawerNavigator);
