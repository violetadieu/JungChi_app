import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import RNU from 'react-native-units';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import ActionCreator from '../actions';

class select_board extends Component {
  constructor(props) {
    super(props);
    this.props.navigationProps.setParams({partyId: 333});
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              //   this.props.selectBoard(1);
              //   console.log(this.props.partyId);
              console.log('navigating...');
              this.props.navigationProps.navigate('P_Board', {
                partyId: 5555,
              });
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_0_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_1_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_2_logo.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_3_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_4_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_5_logo.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_6_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_7_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_8_logo.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image
              style={styles.Button}
              source={require('../image/party_logo/party_none_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party2');
            }}>
            <Image style={styles.Button} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => {
              console.log('party');
            }}>
            <Image style={styles.Button} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  SubContainer: {
    flexDirection: 'row',
  },
  Button: {
    width: RNU.vw(30),
    height: RNU.vw(30),
    overflow: 'hidden',
    resizeMode: 'cover',
    margin: RNU.vw(1),
    marginTop: RNU.vw(5),
  },
  Text: {
    width: RNU.vw(30),
    height: RNU.vw(30),
    margin: RNU.vw(1),
    marginTop: RNU.vw(5),
    textAlign: 'center',
  },
});
