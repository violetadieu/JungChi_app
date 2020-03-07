/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import BoardListItem from './BoardListItem';
import {NavigationService} from './';

import ActionButton from 'react-native-action-button';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import WriteIcon from 'react-native-vector-icons/FontAwesome5';
import {NavigationEvents} from 'react-navigation';

export default class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getPostData();
  }

  getPostData = async () => {
    const data = await this.callPostData();
    console.log('getPostData...');
    this.setState({
      data: data.reverse(),
      isLoading: true,
      refreshing: false,
    });
  };

  callPostData = async () => {
    let api_address = 'http://happydaram2.cafe24.com/read/all';
    let response = [];
    await axios
      .get(api_address)
      .then(function(res) {
        response = res.data;
      })
      .catch(err => console.log('callPostData Err: ' + err));
    return response;
  };

  onRefresh() {
    this.setState({refreshing: true});
    this.getPostData();
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <NavigationEvents onWillFocus={() => this.getPostData()} />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          hideShadow={true}
          style={{position: 'absolute', zIndex: 999}}>
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="새로운 글쓰기"
            onPress={() => NavigationService.navigate('BoardWrite')}>
            <WriteIcon name="pen" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="검색하기"
            onPress={() =>
              console.log(this.props.navigation.getParam('aaa', 'nono'))
            }>
            <SearchIcon name="search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh.bind(this)}
          ListEmptyComponent={
            <Text style={styles.emptyComponent}>
              표시할 글이 없습니다.{'\n'}+ 를 눌러서 글을 작성해주세요!
            </Text>
          }
          keyExtractor={(item, key) => key.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate('BoardRead', {
                    data: item,
                  });
                }}
                activeOpacity={0.3}>
                <BoardListItem data={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 'center',
  },
  actionButtonIcon: {
    fontSize: 18,
    height: 22,
    color: 'white',
  },
  emptyComponent: {
    color: 'rgba(128,128,128,0.7)',
    textAlign: 'center',
    fontSize: 15,
  },
});
