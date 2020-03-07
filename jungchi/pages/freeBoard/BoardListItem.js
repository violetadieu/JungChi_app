import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import RNU from 'react-native-units';
import Modal from 'react-native-modal';
import Thumbs_up from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

class Item extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  deleteArticle = () => {
    let delete_url = 'http://happydaram2.cafe24.com/article/delete?';
    let article_id = this.props.data.article_id;
    let social_id = this.props.data.social_id;
    delete_url += 'article_id=' + article_id;
    delete_url += '&social_id=' + social_id;

    axios
      .delete(delete_url)
      .then(this.toggleModal.bind())
      .catch(this.toggleModal.bind());
  };
  render() {
    return (
      <View style={styles.CardContainer}>
        <View style={{flex: 6, marginBottom: 10, marginLeft: 5}}>
          <View style={styles.SubContainer}>
            <Text style={styles.CardTitle}>{this.props.data.subject}</Text>
          </View>

          <View style={styles.SubContainer2}>
            <Text style={styles.SubText}> {this.props.data.nickname}</Text>
            <Text style={{color: 'rgba(1,1,1,0.2)'}}> | </Text>
            <Text style={styles.SubText}>
              댓글 {this.props.data.comment_size}
            </Text>

            <View
              style={{
                flex: 3,
                alignItems: 'flex-end',
                marginRight: RNU.vw(3),
              }}>
              <Text style={styles.SubText}>
                {getTimestampToDate(this.props.data.create_time)}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            height: '80%',
            marginRight: 5,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Thumbs_up name="thumbs-o-up" style={styles.Icon} />
          <Text style={styles.Text}>{this.props.data.recommend}</Text>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackButtonPress={this.toggleModal}
          backdropOpacity={0}>
          <View style={styles.Modal}>
            <Text>hi</Text>
          </View>
          <Button title="delete test" onPress={this.deleteArticle} />
        </Modal>
      </View>
    );
  }
}

const BoardListItem = ({data}) => <Item data={data} />;
//작성일자, 제목, 작성자, 추천수,  조회수
const styles = StyleSheet.create({
  CardContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#d6d7da',
    flexDirection: 'row',
    height: RNU.vh(10),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  SubContainer: {
    margin: 0,
    padding: 0,
    marginLeft: 7,
    flexDirection: 'row',
  },
  SubContainer2: {
    margin: 0,
    padding: 0,
    marginLeft: 7,
    flexDirection: 'row',
    marginTop: RNU.vh(1),
  },
  CardTitle: {
    width: '100%',
    fontSize: 17,
    padding: 3,
    marginTop: RNU.vh(1.5),
  },
  CardContent: {
    width: '100%',
    fontSize: 12,
    padding: 8,
    flex: 2,
  },
  Icon: {
    fontSize: 23,
    marginLeft: RNU.vw(5),
    marginTop: RNU.vh(2),
    color: 'rgba(0, 0, 0, 0.5)',
  },
  Text: {
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'center',
    marginTop: 0,
  },
  SubText: {
    color: 'rgba(0,0,0,0.4)',
  },
  Modal: {
    backgroundColor: 'white',
    height: '100%',
    margin: 0,
    width: '100%',
    flex: 1,
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
  var stamp_date = year + month + day;

  if (stamp_date === today_date) {
    var h = stamp.getHours().toString();
    var m = stamp.getMinutes().toString();

    if (h.length < 2) h = '0' + h;
    if (m.length < 2) m = '0' + m;

    return h + ':' + m;
  } else {
    return month + '.' + day;
  }
}

export default BoardListItem;
