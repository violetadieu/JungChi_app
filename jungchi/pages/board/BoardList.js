import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import BoardListItem from './BoardListItem';
import BoardButton from './BoardButton';

export default class BoardList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }

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
          {this.state.data
            .slice(0)
            .reverse()
            .map((data, key) => {
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
