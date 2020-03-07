import KakaoLogins from '@react-native-seoul/kakao-login';
import {Alert} from 'react-native';
export function kakaoLogin() {
  return new Promise(function(resolve, reject) {
    KakaoLogins.login((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

export function kakaoGetProfile() {
  return new Promise(function(resolve, reject) {
    KakaoLogins.getProfile((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

export function kakaoLogout() {
  KakaoLogins.logout((err, result) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log(result);
    Alert.alert('로그아웃 되었습니다.');
  });
}
