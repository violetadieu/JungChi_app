//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, Button} from 'react-native';
// import all basic components

export default class Screen3 extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Screen 3 </Text>
        <Button
          title="nav"
          onPress={() => {
            this.props.navigation.setParams('hi', 'aaaaa');
            console.log('hi');
            this.props.navigation.navigate('Screen4');
          }}
        />
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
