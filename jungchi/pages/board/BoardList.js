import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import BoardListItem from './BoardListItem';
import {NavigationService} from './';

import ActionButton from 'react-native-action-button';
import AwesomeButton from 'react-native-really-awesome-button';
import Toast from 'react-native-root-toast';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import WriteIcon from 'react-native-vector-icons/FontAwesome5';

export default class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
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
        {/* <ScrollView
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
              return (
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('BoardRead', {
                      data: data,
                    });
                  }}
                  activeOpacity={0.3}>
                  <BoardListItem data={data} key={key} />
                </TouchableOpacity>
              );
            })}
        </ScrollView> */}
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh.bind(this)}
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
  actionButtonIcon: {
    fontSize: 18,
    height: 22,
    color: 'white',
  },
});
