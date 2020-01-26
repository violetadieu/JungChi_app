import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';
import BoardListItem from './BoardListItem';
import BoardButton from './BoardButton';

export default class BoardList extends Component {
  state = {
    data: [],
    isLoading: false,
    refreshing: false,
  };

  componentDidMount() {
    this.getPostData();
  }

  getPostData = async () => {
    const data = await this.callPostData();
    this.setState({
      data: data,
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
        <ScrollView
          style={styles.cardContainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }>
          {this.state.data.map((data, key) => {
            return <BoardListItem data={data} key={key} />;
          })}
        </ScrollView>
        <BoardButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
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
});
