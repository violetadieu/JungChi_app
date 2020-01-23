import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Linking,
  Alert,
} from 'react-native';
import RNU from 'react-native-units';
import KakaoLogins from '@react-native-seoul/kakao-login';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  // 카카오 로그인 하기
  kakaoLogin = () => {
    KakaoLogins.login((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      this.props.navigation.goBack(null);
      //Alert.alert('login!', JSON.stringify(result));
    });
  };

  kakaoLogout = () => {
    KakaoLogins.logout((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      Alert.alert('logout!', JSON.stringify(result));
    });
  };

  kakaoGetProfile = () => {
    KakaoLogins.getProfile((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      Alert.alert("user's profile", JSON.stringify(result));
    });
  };

  openKakao = () => {
    KakaoLogins.getProfile((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      // console.log("---user's profile---");
      // console.log(JSON.stringify(result.id));
      // console.log(JSON.stringify(result.nickname));
      // console.log(JSON.stringify(result.email));
      // console.log(JSON.stringify(result.profile_image_url));
      var param = '';
      param += 'id=' + JSON.stringify(result.id) + '&';
      param += 'nickname=' + JSON.stringify(result.nickname) + '&';
      param += 'email=' + JSON.stringify(result.email) + '&';
      param += 'profile_image_url=' + JSON.stringify(result.profile_image_url);

      let user_id = JSON.stringify(result.id);
      let user_nickname = JSON.stringify(result.nickname);
      let user_email = JSON.stringify(result.email);
      let user_profile_image_url = JSON.stringify(result.profile_image_url);

      user_id = user_id.split('"').join('');
      user_nickname = user_nickname.split('"').join('');
      user_email = user_email.split('"').join('');
      user_profile_image_url = user_profile_image_url.split('"').join('');

      axios
        .get('http://happydaram2.cafe24.com/member/login', {
          params: {
            id: user_id,
            nickname: user_nickname,
            email: user_email,
            profile_image_url: user_profile_image_url,
          },
        })
        .then(function(res) {
          console.log(res.data);
        })
        .catch(function(er) {
          console.log(er);
        });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.kakaoButton]}
          onPress={() => this.kakaoLogin()}>
          <Text style={styles.loginText}>카카오톡 아이디로 로그인</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.kakaoButton]}
          onPress={() => this.kakaoLogout()}>
          <Text style={styles.loginText}>카카오톡 로그아웃</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.kakaoButton]}
          onPress={() => this.kakaoGetProfile()}>
          <Text style={styles.loginText}>프로필 확인</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.kakaoButton]}
          onPress={() => this.openKakao()}>
          <Text style={styles.loginText}>요청 TEST</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: RNU.vw(65),
    borderRadius: 10,
  },
  kakaoButton: {
    backgroundColor: '#f7d600',
  },
  naverButton: {
    backgroundColor: '#1EC800',
  },
  loginText: {
    color: 'black',
  },
});
