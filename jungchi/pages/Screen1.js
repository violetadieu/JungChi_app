/* eslint-disable react-native/no-inline-styles */
/*
  '투표하기' 메뉴이다.
  TouchableOpacity 로 구현해 놓은 두 개의 버튼이 존재하며,
  각각의 버튼은 'election1.js', 'election2.js' 로 navigate 한다.
*/
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import RNU from 'react-native-units';

export default class Screen1 extends Component {
  submitData = () => {
    console.log('button pressed');
  };

  //Screen1 Component
  render() {
    return (
      <View
        style={
          (styles.MainContainer,
          {flexDirection: 'row', justifyContent: 'space-around'})
        }>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: RNU.vw(30),
          }}>
          <TouchableOpacity
            style={(styles.Button, {flex: 1, flexDirection: 'row'})}
            onPress={() => this.props.navigation.navigate('Election1')}>
            <Image
              style={styles.Button}
              source={require('../assets/images/button/vote_button.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: -10,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}> 대통령 선거</Text>
          </View>
        </View>
        <View style={{flex: 1, marginTop: RNU.vw(55)}}>
          <TouchableOpacity
            style={(styles.Button, {flex: 1, position: 'absolute'})}
            onPress={() => this.props.navigation.navigate('Election2')}>
            <Image
              style={styles.Button}
              source={require('../assets/images/button/vote_button.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: -10,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: RNU.vw(55),
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {' '}
              국회의원 선거
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  Button: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    borderWidth: 3,
    overflow: 'hidden',
    borderColor: 'black',
    margin: RNU.vw(5),
  },
});
