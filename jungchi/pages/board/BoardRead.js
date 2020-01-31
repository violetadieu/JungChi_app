/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ReadHeaderButtons, Item} from '../board/navigation/ReadHeaderButton';
import HitIcon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
export default class BoardRead extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
        <ReadHeaderButtons>
          <Item title="refresh" iconName="md-refresh" />
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
      data: this.props.navigation.getParam('data', 'nono'),
    };
  }

  _resetStateData = () => {
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
  _recommandBoard = async () => {
    let api_address = 'http://happydaram2.cafe24.com/article/recommend?';
    let article_id = this.state.data.article_id;
    api_address += 'article_id=' + article_id;
    console.log(this.state.data.article_id);
    await axios
      .patch(api_address)
      .then(() => this._resetStateData())
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <ScrollView style={styles.MainContainer}>
        <View style={{marginLeft: 20, margin: 0}}>
          <Text style={styles.Title}>{this.state.data.subject}</Text>
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
            style={styles.Image}
          />
          <View style={{flexDirection: 'column', paddingTop: 10}}>
            <Text style={styles.Name}>류인성</Text>
            <Text style={styles.CreationDate}>
              {getTimestampToDate(this.state.data.create_time)}
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.Content}>{this.state.data.content}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
              marginLeft: 20,
            }}>
            <TouchableOpacity onPress={this._recommandBoard}>
              <HitIcon name="upcircleo" style={styles.Icon} />
            </TouchableOpacity>
            <Text style={{fontFamily: 'NotoSansKR-Regular', marginLeft: 15}}>
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
              <HitIcon name="downcircleo" style={styles.Icon} />
            </TouchableOpacity>
            <Text style={{fontFamily: 'NotoSansKR-Regular', marginLeft: 15}}>
              {this.state.data.non_recommend}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  BottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Image: {
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 10,
  },
  Name: {
    fontSize: 13,
  },
  CreationDate: {
    color: 'rgba(128,128,128,0.5)',
    fontSize: 10,
  },
  Title: {
    fontSize: 25,
  },
  Content: {
    fontFamily: 'NotoSansKR-Regular',
  },
  Icon: {
    fontSize: 40,
  },
});

function getTimestampToDate(timeStamp) {
  var stamp = new Date(timeStamp);
  var today = new Date();

  var year = today.getFullYear().toString();
  var month = (today.getMonth() + 1).toString();
  var day = today.getDate().toString();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  var today_date = year + month + day;

  year = stamp.getFullYear().toString();
  month = (stamp.getMonth() + 1).toString();
  day = stamp.getDate().toString();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  var stamp_date = year + '.' + month + '.' + day + ' ';
  stamp_date +=
    stamp.getHours().toString() + ':' + stamp.getMinutes().toString();
  return stamp_date;
}
