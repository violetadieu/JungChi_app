/* eslint-disable react-native/no-inline-styles */
//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
// import all basic components
import RNU from 'react-native-units';
import logoUrlArray from '../assets/images/party_logo_url';
import Board from './Board';

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoard: false,
      partyId: 0,
    };
  }

  componentDidMount() {
    console.log(this.state.displayBoard);
  }
  componentWillUnmount() {
    this.setState({
      displayBoard: false,
    });
  }
  goBoard = id => {
    this.props.navigation.navigate('P_Board');
    console.log(this.id);
  };

  renderBoard = num => {
    console.log(num);
    this.setState({
      displayBoard: !this.state.displayBoard,
    });
    this.setState({
      partyId: num,
    });
  };

  //Screen2 Component
  render() {
    return (
      <View>
        {this.state.displayBoard ? (
          <View>
            <Button
              title="test"
              onPress={() => this.renderBoard()}
              style={{marginTop: RNU.vh(10)}}
            />
            <Board partyId={this.state.partyId} />
          </View>
        ) : (
          <View style={styles.MainContainer}>
            <View style={styles.SubContainer}>
              <TouchableOpacity
                style={(styles.Button, {margin: 0})}
                onPress={() => {
                  this.props.navigation.navigate('P_Board');
                }}>
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
                onPress={() => this.renderBoard()}>
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
        )}
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
