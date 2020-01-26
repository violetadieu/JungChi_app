import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Search extends Component {
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> 글 검색해야함 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
