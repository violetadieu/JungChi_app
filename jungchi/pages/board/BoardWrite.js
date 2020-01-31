/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RNU from 'react-native-units';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {WriteHeaderButtons, Item} from '../board/navigation/WriteHeaderButton';
import {HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';
import AwesomeButton from 'react-native-really-awesome-button';
import ExitIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-root-toast';
import axios from 'axios';
export default class Write extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isSearchVisible: false,
    isWriteVisible: false,
    subject: '',
    content: '',
    error: '',
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
  _write = async () => {
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

    await axios
      .put(put_url)
      .then(this._writeSuccess)
      .catch(this._writeFailed);
    this.props.navigation.setParams({aaa: 'aaa'});
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.pop()}
            style={{flex: 1}}>
            <ExitIcon name="md-arrow-back" style={styles.Button} />
          </TouchableOpacity>
          <Text
            style={{
              flex: 4,
              fontFamily: 'NotoSansKR-Medium',
              fontSize: 20,
              marginLeft: 3,
            }}>
            글 쓰기
          </Text>
          <AwesomeButton
            backgroundActive="#9932dc"
            backgroundColor="#9000dc"
            backgroundDarker="#9932dc"
            borderRadius={20}
            style={{margin: 10}}
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
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {backgroundColor: 'white'},
  WriteContainer: {
    margin: 20,
    marginTop: 5,
    height: '100%',
  },
  Button: {
    backgroundColor: 'transparent',
    fontSize: 30,
    marginTop: 17,
    paddingLeft: 15,
  },
});
