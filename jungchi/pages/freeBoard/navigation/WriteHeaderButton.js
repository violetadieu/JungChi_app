/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';
import AwesomeButton from 'react-native-really-awesome-button';
import RNU from 'react-native-units';
import Toast from 'react-native-root-toast';
import axios from 'axios';
export default class WriteHeaderButton extends Component {
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
      this._write();
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
  _write = () => {
    let put_url = 'http://happydaram2.cafe24.com/article/write?';

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

    axios
      .put(put_url)
      .then(this._writeSuccess())
      .catch(this._writeFailed());
  };
  constructor(props) {
    super(props);
    this.state = {dialogVisible: false};
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('hihi');
        }}>
        <AwesomeButton
          backgroundActive="#9932dc"
          backgroundColor="#9000dc"
          backgroundDarker="#9932dc"
          borderRadius={20}
          width={RNU.vw(20)}
          height={RNU.vh(5)}
          style={{marginRight: 5}}
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
      </TouchableOpacity>
    );
  }
}

export const WriteHeaderButtons = props => {
  return <HeaderButtons HeaderButtonComponent={WriteHeaderButton} {...props} />;
};
export {Item} from 'react-navigation-header-buttons';
