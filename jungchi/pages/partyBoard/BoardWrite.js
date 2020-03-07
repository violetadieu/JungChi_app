/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  URLSearchParams,
  Image,
  PermissionsAndroid,
} from 'react-native';
import RNU from 'react-native-units';
import {TextField} from 'react-native-material-textfield';
import AwesomeButton from 'react-native-really-awesome-button';
import ExitIcon from 'react-native-vector-icons/Ionicons';
import ImageIcon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const imagePickerOptions = {
  title: '사진 첨부',
  cancelButtonTitle: '취소',
  takePhotoButtonTitle: '직접 촬영',
  chooseFromLibraryButtonTitle: '앨범에서 선택',
};

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append('photo', {
    name: 'photo.jpg',
    type: photo.type,
    uri: photo.uri.replace('content://', ''),
  });
  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

export default class Write extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isSearchVisible: false,
    isWriteVisible: false,
    isUploading: false,
    subject: '',
    content: '',
    imageSource: null,
    error: '',
  };
  checkAllPermissions = async () => {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        (await PermissionsAndroid.check('android.permission.CAMERA')) &&
        (await PermissionsAndroid.check('android.permission.CAMERA')) &&
        (await PermissionsAndroid.check('android.permission.CAMERA'))
      ) {
        console.log('You can use the camera');
        return true;
      } else {
        console.log('all permissions denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };
  selectImage = async () => {
    if (!this.checkAllPermissions()) return;
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          imageSource: response,
        });
      }
    });
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
    let article_type = '99';
    let nickname = 'anonymous';
    let subject = this.state.subject;
    let content = this.state.content;
    let article_picture = '';
    if (this.state.imageSource != null) {
      const data = new FormData();
      data.append('image', {
        uri: this.state.imageSource.uri, //.replace('content://', ''),
        type: this.state.imageSource.type, // or photo.type
        name: 'photo.jpg',
      });
      console.log(this.state.imageSource.type);
      console.log(this.state.imageSource.uri);

      let params = {
        image: this.state.imageSource.data,
        name: 'asdf',
        type: this.state.imageSource.type,
      };

      axios
        .post('http://happydaram1.cafe24.com/article/')
        .then(res => console.log(res))
        .catch(err => console.log(err));

      // fetch('http://happydaram1.cafe24.com/article', {
      //   method: 'POST',
      //   body: createFormData(this.state.imageSource, {userId: '123'}),
      // })
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    }

    return;
    // let form = new FormData();
    // form.append('social_id', social_id);
    // form.append('article_type', article_type);
    // form.append('nickname', nickname);
    // form.append('subject', subject);
    // form.append('content', content);
    // form.append('article_picture', article_picture);

    put_url += 'social_id=' + social_id;
    put_url += '&article_type=' + article_type;
    put_url += '&nickname=' + nickname;
    put_url += '&subject=' + subject;
    put_url += '&content=' + content;
    put_url += '&article_picture=' + article_picture;
    console.log('put_url', put_url);
    await axios
      .put(put_url)
      .then(this._writeSuccess)
      .catch(this._writeFailed);
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.pop()}
            style={{flex: 1}}>
            <ExitIcon name="md-arrow-back" style={styles.button} />
          </TouchableOpacity>
          <Text
            style={{
              flex: 4,
              fontFamily: 'NotoSansKR-Medium',
              fontSize: 18,
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
            width={70}
            height={35}
            onPress={this._writeCheck}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'NotoSansKR-Medium',
                color: 'white',
              }}>
              등록
            </Text>
          </AwesomeButton>
        </View>
        <ScrollView
          style={styles.writeContainer}
          showsVerticalScrollIndicator={false}>
          <View>
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
                height: RNU.vh(55),
                textAlignVertical: 'top',
              }}
              onChangeText={content => {
                this.setState({content: content, error: ''});
              }}
            />
          </View>
        </ScrollView>
        <Image
          source={{
            uri: this.state.imageSource ? this.state.imageSource.uri : null,
          }}
          style={styles.image}
        />
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={this.selectImage}>
            <ImageIcon
              name="image"
              style={{fontSize: 24, margin: 12, color: 'rgba(102,0,153,0.7)'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white', height: '100%'},
  writeContainer: {
    margin: 20,
    marginTop: 5,
  },
  bottomContainer: {
    height: 50,
    borderTopColor: 'rgba(102,0,153,0.5)',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    fontSize: 30,
    marginTop: 13,
    paddingLeft: 15,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
    margin: 10,
  },
});
