//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
import axios from 'axios';
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

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
        <TouchableOpacity>
          <Button
            title="KaKao"
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}
          />
          <Button
            title="Naver"
            onPress={() => {
              console.log(this.state.url);
            }}
          />
          <Button
            title="text"
            onPress={() => {
              this.props.navigation.setParams(('ffff': 'aaa'));
              this.props.navigation.navigate('Screen4');
            }}
          />
        </TouchableOpacity>
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
