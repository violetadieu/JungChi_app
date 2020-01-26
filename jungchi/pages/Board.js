//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

export default class Board extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <Text style={{fontSize: 23}}>hi im {this.props.partyId}</Text>
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
});
