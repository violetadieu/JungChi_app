import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import RNU from 'react-native-units';

class Login_View extends Component {
  render() {
    return (
      <View
        style={{
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9932CC',
          marginBottom: 0,
        }}>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <Image
            source={require('./image/button/vote_button.png')}
            style={styles.header_image}
          />
          <Text style={{marginTop: RNU.vh(10)}}>OOO님 반갑습니다.</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Login');
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
    );
  }
}

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
