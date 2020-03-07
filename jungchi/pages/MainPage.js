import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from 'react-native';

import axios from 'axios';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {url: 'asdf'};
  }
  setURL = url => {
    this.setState({url: url});
  };

  getURL = () => {
    var url;
    axios
      .get('http://happydaram2.cafe24.com', {
        params: {
          login: 'kakao',
        },
        responseType: 'text',
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getImg = () => {
    axios.get('http://happydaram2.cafe24.com');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Home </Text>
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
