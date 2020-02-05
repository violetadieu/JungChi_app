/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import {ReadHeaderButtons, Item} from '../board/navigation/ReadHeaderButton';
import HitIcon from 'react-native-vector-icons/AntDesign';
import SendIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Toast from 'react-native-root-toast';
import RNU from 'react-native-units';
export default class BoardRead extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
        <ReadHeaderButtons>
          <Item
            title="refresh"
            iconName="md-refresh"
            onPress={() => console.log('hi')}
          />
          <Item
            title="option"
            iconName="md-more"
            data={navigation.getParam('data', 'nono')}
            navigation={navigation}
          />
        </ReadHeaderButtons>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data', null),
      content: '',
      refreshingComment: true,
    };
    this.comment = {
      content: 'asdf',
    };
  }

  componentDidMount() {
    if (this.state.data == null) {
      Alert.alert('글을 불러올 수 없습니다.');
      this.props.navigation.goBack();
    } else {
      console.log(this.state.data.article_id);
      this.resetStateData();
    }
  }

  resetStateData = () => {
    let get_address = 'http://happydaram2.cafe24.com/read/one?';
    let article_id = this.state.data.article_id;
    get_address += 'article_id=' + article_id;
    axios
      .get(get_address)
      .then(res => this.setState({data: res.data}))
      .catch(function(err) {
        console.log(err);
      });
  };

  recommendBoard = async () => {
    let api_address = 'http://happydaram2.cafe24.com/article/recommend?';
    let article_id = this.state.data.article_id;
    api_address += 'article_id=' + article_id;
    console.log(this.state.data.article_id);
    await axios
      .patch(api_address)
      .then(() => this.resetStateData())
      .catch(function(err) {
        console.log(err);
      });
  };

  writeComment = async () => {
    if (this.comment.content.replace(/\s/g, '') === '') return;

    let api_address = 'http://happydaram2.cafe24.com/comment/insert?';
    api_address += 'article_id=' + this.state.data.article_id;

    let nickname = '류인성';
    let social_id = 'kakao';
    let content = this.comment.content;

    api_address += '&nickname=' + nickname;
    api_address += '&social_id=' + social_id;
    api_address += '&content=' + content;
    api_address += '&candidate_id=0';

    await axios
      .put(api_address)
      .then(() => {
        this.resetStateData();
        Toast.show('댓글이 작성되었습니다.');
        this.setState({state: ''});
      })
      .catch(err => {
        console.log(err);
        Toast.show('댓글 작성에 실패했습니다.');
      });
    Keyboard.dismiss();
  };

  render() {
    /* Error handling: navigator에서 넘어온 data가 null일 경우 */
    if (this.state.data) {
      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.mainContainer}>
            <View style={{marginLeft: 20, margin: 0}}>
              <Text style={styles.title}>{this.state.data.subject}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(128,128,128,0.2)',
              }}>
              <Image
                source={require('../../assets/images/button/vote_button.png')}
                style={styles.image}
              />
              <View style={{flexDirection: 'column', paddingTop: 10}}>
                <Text style={styles.name}>류인성</Text>
                <Text style={styles.date}>
                  {getTimestampToDate(this.state.data.create_time)}
                </Text>
              </View>
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={styles.content}>{this.state.data.content}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                //marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(128,128,128,0.2)',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 20,
                }}>
                <TouchableOpacity onPress={this.recommendBoard}>
                  <HitIcon name="upcircleo" style={styles.icon} />
                </TouchableOpacity>
                <Text
                  style={{fontFamily: 'NotoSansKR-Regular', marginLeft: 15}}>
                  {this.state.data.recommend}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 20,
                  marginLeft: 20,
                }}>
                <TouchableOpacity onPress={() => console.log(this.props)}>
                  <HitIcon name="downcircleo" style={styles.icon} />
                </TouchableOpacity>
                <Text
                  style={{fontFamily: 'NotoSansKR-Regular', marginLeft: 15}}>
                  {this.state.data.non_recommend}
                </Text>
              </View>
            </View>
            {this.state.data.commentlist.reverse().map((data, key) => {
              return <CommentView key={key} data={data} />;
            })}
          </ScrollView>
          <View style={styles.commentInput}>
            <TextInput
              placeholder="댓글을 작성해주세요"
              clearButtonMode="always"
              style={{marginLeft: 10, flex: 7}}
              onChangeText={text => {
                this.comment.content = text;
              }}
              ref={input => {
                this.textInput = input;
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.textInput.clear();
                this.writeComment();
              }}>
              <SendIcon
                name="ios-send"
                style={{
                  marginRight: 15,
                  fontSize: 30,
                  color: 'rgba(102,0,153,0.7)',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>글 읽기 오류</Text>
        </View>
      );
    }
  }
}

class CommentView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.commentContainer}>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              marginTop: 2,
              color: 'rgba(30,30,30,0.8)',
              fontSize: 12,
            }}>
            {this.props.data.nickname}
          </Text>
          <Text style={styles.commentText}>{this.props.data.content}</Text>
          <Text
            style={{
              marginTop: 2,
              color: 'rgba(128,128,128,0.5)',
              fontSize: 12,
            }}>
            {getTimestampToDate(this.props.data.create_time)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  commentContainer: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'rgba(128,128,128,0.2)',
  },
  commentText: {
    marginTop: 2,
    marginBottom: 2,
  },
  commentInput: {
    height: 50,
    borderTopColor: 'rgba(102,0,153,0.5)',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 13,
  },
  date: {
    color: 'rgba(128,128,128,0.5)',
    fontSize: 10,
  },
  title: {
    fontSize: 25,
  },
  content: {
    fontFamily: 'NotoSansKR-Regular',
  },
  icon: {
    fontSize: 40,
  },
});

function getTimestampToDate(timeStamp) {
  var stamp = new Date(timeStamp);

  var year = stamp.getFullYear().toString();
  var month = (stamp.getMonth() + 1).toString();
  var day = stamp.getDate().toString();
  var hour = stamp.getHours().toString();
  var minute = stamp.getMinutes().toString();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;
  var stamp_date = year + '.' + month + '.' + day + ' ' + hour + ':' + minute;
  return stamp_date;
}
