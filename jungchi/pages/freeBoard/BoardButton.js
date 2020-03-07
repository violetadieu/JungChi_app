import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ActionButton from 'react-native-action-button';
import {createStackNavigator} from 'react-navigation-stack';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import WriteIcon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
export default class BoardButton extends Component {
  state = {
    isSearchVisible: false,
    isWriteVisible: false,
  };

  toggleSearch = () => {
    this.setState({isSearchVisible: !this.state.isSearchVisible});
  };
  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)" hideShadow={true}>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="새로운 글쓰기"
          onPress={() => {
            this.toggleSearch;
          }}>
          <WriteIcon name="pen" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="검색하기"
          onPress={() => {}}>
          <SearchIcon name="search" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <Modal isVisible={this.state.isSearchVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
          </View>
        </Modal>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
