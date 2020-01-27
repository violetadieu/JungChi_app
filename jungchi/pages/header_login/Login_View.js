/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Button,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import RNU from 'react-native-units';
import Modal from 'react-native-modal';
import KakaoLogins from '@react-native-seoul/kakao-login';

export default class Login_View extends Component {
  state = {
    isModalVisible: false,
    isLoggedIn: false,
    nickname: 'anonymous',
    profileUri: 'no_image',
  };
  constructor(props) {
    super(props);
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  // 카카오 로그인 하기
  kakaoLogin = () => {
    KakaoLogins.login((err, result) => {
      if (err) {
        console.log(err);
        this.toggleModal();
        return;
      }
      this.toggleModal();
      this.kakaoGetProfile();
      this.setState({isLoggedIn: true});
    });
  };

  kakaoGetProfile = () => {
    KakaoLogins.getProfile((err, result) => {
      if (err) {
        console.log('kakaoGetProfile: ' + err);
        return;
      }
      this.setState({
        nickname: result.nickname,
        profileUri: result.thumb_image_url,
      });
    });
  };

  kakaoLogout = () => {
    KakaoLogins.logout((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      Alert.alert('logout!', JSON.stringify(result));
      this.setState({isLoggedIn: false});
    });
  };

  render() {
    return (
      <View
        style={{
          height: 200,
          alignItems: 'flex-end',
          justifyContent: 'center',
          backgroundColor: '#9932CC',
          marginBottom: 0,
        }}>
        {this.state.isLoggedIn ? (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              position: 'absolute',
              right: 5,
              bottom: 90,
            }}>
            <Image
              source={{uri: this.state.profileUri}}
              style={styles.header_image}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              position: 'absolute',
              right: 5,
              bottom: 90,
            }}>
            <Image
              source={require('../../assets/images/button/vote_button.png')}
              style={styles.header_default_image}
            />
          </View>
        )}

        {this.state.isLoggedIn ? (
          <View>
            <View style={{flex: 2}} />
            <Text
              style={{
                fontFamily: 'NotoSansKR-Medium',
                color: '#140126',
                marginRight: 30,
                marginBottom: 10,
                fontSize: 17,
                flex: 0.5,
              }}>
              반갑습니다 {this.state.nickname}님
            </Text>
          </View>
        ) : (
          <View>
            <View style={{flex: 2}} />
            <Text
              style={{
                fontFamily: 'NotoSansKR-Medium',
                color: '#140126',
                marginRight: 30,
                marginBottom: 10,
                fontSize: 17,
                flex: 0.5,
              }}>
              로그인 해주세요.
            </Text>
          </View>
        )}

        {this.state.isLoggedIn ? (
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.kakaoLogout();
              this.props.navigation.toggleDrawer();
            }}
            underlayColor="#9932cc">
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: RNU.px(40),
              }}>
              로그아웃
            </Text>
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.toggleModal();
              this.props.navigation.toggleDrawer();
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
        )}

        <Modal
          isVisible={this.state.isModalVisible}
          onBackButtonPress={this.toggleModal}
          onBackdropPress={this.toggleModal}
          style={{alignItems: 'center'}}>
          <TouchableOpacity
            underlayColor="#808080"
            activeOpacity={0.8}
            onPress={this.kakaoLogin}>
            <View style={styles.loginBtn}>
              <Image
                source={require('../../assets/images/button/kakao_logo.png')}
                style={{width: 40, height: 40, marginLeft: 8}}
              />

              <Text style={{fontFamily: 'NotoSansKR-Medium', marginLeft: 30}}>
                카카오 계정으로 로그인하기
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor="#808080"
            activeOpacity={0.8}
            onPress={() => {
              console.log('naver login btn');
            }}>
            <View style={styles.loginBtn}>
              <Image
                source={require('../../assets/images/button/naver_logo.png')}
                style={{width: 40, height: 40, marginLeft: 8}}
              />

              <Text style={{fontFamily: 'NotoSansKR-Medium', marginLeft: 30}}>
                네이버 계정으로 로그인하기
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
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
    marginRight: 28,
    marginLeft: 40,
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    height: '15%',
    justifyContent: 'center',
    flex: 1,
  },
  header_image: {
    width: 100,
    height: 100,
    borderRadius: 120 / 2,
    borderWidth: 1,
    marginLeft: RNU.vw(4),
    marginRight: RNU.vw(3),
    marginTop: RNU.vh(0),
    paddingLeft: 0,
  },
  header_default_image: {
    width: 100,
    height: 100,
    borderRadius: 120 / 2,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: RNU.vw(4),
    marginRight: RNU.vw(3),
    marginTop: RNU.vh(0),
    paddingLeft: 0,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: RNU.px(750),
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  },
});
