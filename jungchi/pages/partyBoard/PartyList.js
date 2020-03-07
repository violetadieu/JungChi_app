import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Button} from 'react-native';
import logoUrlArray from '../../assets/images/party_logo_url';
import RNU from 'react-native-units';
import {NavigationService} from './';
export default class PartyList extends Component {
  renderBoard = _partyNum => {
    NavigationService.navigate('BoardList', {
      partyNum: _partyNum,
    });
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(0)}>
            <Image style={styles.Button} source={logoUrlArray[0]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(1)}>
            <Image style={styles.Button} source={logoUrlArray[1]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(2)}>
            <Image style={styles.Button} source={logoUrlArray[2]} />
          </TouchableOpacity>
        </View>

        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(3)}>
            <Image style={styles.Button} source={logoUrlArray[3]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(4)}>
            <Image style={styles.Button} source={logoUrlArray[4]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(5)}>
            <Image style={styles.Button} source={logoUrlArray[5]} />
          </TouchableOpacity>
        </View>

        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(6)}>
            <Image style={styles.Button} source={logoUrlArray[6]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(7)}>
            <Image style={styles.Button} source={logoUrlArray[7]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(8)}>
            <Image style={styles.Button} source={logoUrlArray[8]} />
          </TouchableOpacity>
        </View>

        <View style={styles.SubContainer}>
          <TouchableOpacity
            style={(styles.Button, {margin: 0})}
            onPress={() => this.renderBoard(9)}>
            <Image style={styles.Button} source={logoUrlArray[9]} />
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
