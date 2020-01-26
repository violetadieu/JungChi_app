/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';

import BoardList from './board/BoardList';
import axios from 'axios';
import RNU from 'react-native-units';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import AwesomeButton from 'react-native-really-awesome-button';
import Toast from 'react-native-root-toast';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import WriteIcon from 'react-native-vector-icons/FontAwesome5';
import ExitIcon from 'react-native-vector-icons/Octicons';
export default class Screen4 extends Component {
  state = {
    isSearchVisible: false,
    isWriteVisible: false,
    subject: '',
    content: '',
    error: '',
  };
  toggleSearch = () => {
    this.setState({isSearchVisible: !this.state.isSearchVisible});
  };
  toggleWrite = () => {
    this.setState({isWriteVisible: !this.state.isWriteVisible});
  };
  _writeCheck = () => {
    let subject = this.state.subject;
    let content = this.state.content;
    subject = subject.replace(/\s/g, '');
    content = content.replace(/\s/g, '');
    if (subject === '') {
      console.log('subject is empty');
      this.setState({error: '제목을 입력해주세요.'});
    } else if (content === '') {
      this.setState({error: '내용을 입력해주세요'});
      console.log('content is empty');
    } else {
      console.log('can write');
      this.write();
    }
  };
  _writeSuccess = () => {
    Toast.show('글이 작성되었습니다.');
    console.log('_writeSuccess');
    this.setState({isWriteVisible: !this.state.isWriteVisible});
  };
  _writeFailed = () => {
    Toast.show('글 작성에 실패했습니다.');
    console.log('_writeFailed');
    this.setState({isWriteVisible: !this.state.isWriteVisible});
  };
  write = () => {
    let put_url = 'http://happydaram2.cafe24.com/write?';

    let social_id = 'kakao01';
    let article_type = '1';
    let nickname = 'anonymous';
    let subject = this.state.subject;
    let content = this.state.content;
    let article_picture = 'nopicture';

    console.log(subject + content);
    put_url += 'social_id=' + social_id;
    put_url += '&article_type=' + article_type;
    put_url += '&nickname=' + nickname;
    put_url += '&subject=' + subject;
    put_url += '&content=' + content;
    put_url += '&article_picture=' + article_picture;

    // let form = new FormData();
    // form.append('social_id', 'ads');
    // form.append('article_type', '1');
    // form.append('nickname', 'asdff');
    // form.append('subject', 'fsubbb');
    // form.append('content', 'afsdd');
    // form.append('article_picture', 'artippp');

    axios
      .put(put_url)
      .then(this._writeSuccess.bind())
      .catch(this._writeFailed.bind());
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <BoardList />
        <ActionButton buttonColor="rgba(231,76,60,1)" hideShadow={true}>
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="새로운 글쓰기"
            onPress={this.toggleWrite}>
            <WriteIcon name="pen" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="검색하기"
            onPress={this.toggleSearch}>
            <SearchIcon name="search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <Modal
          isVisible={this.state.isWriteVisible}
          backdropOpacity={0}
          onBackButtonPress={this.toggleWrite}
          swipeDirection="down"
          onSwipeComplete={this.toggleWrite}
          style={{margin: 0}}>
          <View style={styles.modal}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <ExitIcon
                name="x"
                onPress={this.toggleWrite}
                style={styles.modalBtn}
              />
              <Text
                style={{
                  flex: 4,
                  margin: 5,
                  marginTop: 30,
                  fontFamily: 'NotoSansKR-Medium',
                  fontSize: 20,
                  marginLeft: 0,
                }}>
                글 쓰기
              </Text>
              <AwesomeButton
                backgroundActive="#9932dc"
                backgroundColor="#9000dc"
                backgroundDarker="#9932dc"
                borderRadius={20}
                style={{margin: 5, marginTop: 43}}
                width={RNU.vw(20)}
                height={RNU.vh(5)}
                onPress={this._writeCheck}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'NotoSansKR-Medium',
                    color: 'white',
                  }}>
                  등록
                </Text>
              </AwesomeButton>
            </View>

            <View style={styles.WriteContainer}>
              <TextField
                label="제목"
                characterRestriction={30}
                tintColor="#9932cc"
                onChangeText={subject => {
                  this.setState({subject: subject, error: ''});
                }}
                error={this.state.error}
              />
              <TextInput
                multiline={true}
                placeholder="이 곳을 눌러서 글을 작성할 수 있습니다."
                style={{
                  height: RNU.vh(50),
                  textAlignVertical: 'top',
                }}
                onChangeText={content => {
                  this.setState({content: content, error: ''});
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isSearchVisible}
          backdropOpacity={0}
          onBackButtonPress={this.toggleSearch}>
          <View style={styles.modal}>
            <Button
              title="closed"
              onPress={this.toggleSearch}
              style={{height: RNU.vh(15)}}
            />
            <Text style={{fontSize: 23}}> 글 검색</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
  WriteContainer: {
    backgroundColor: 'white',
    margin: 0,
    marginBottom: 10,
    height: '100%',
  },
  actionButtonIcon: {
    fontSize: 18,
    height: 22,
    color: 'white',
  },
  modal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    height: '100%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalBtn: {
    backgroundColor: 'transparent',
    fontSize: 40,
    margin: 5,
    marginTop: 40,
    marginLeft: 2,
    color: 'rgba(153,50,204,1)',
    flex: 1,
  },
});
