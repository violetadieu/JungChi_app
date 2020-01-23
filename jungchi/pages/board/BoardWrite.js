import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';
import RNU from 'react-native-units';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
export default class Write extends Component {
  state = {
    subject: '',
    content: '',
  };

  //Screen2 Component
  render() {
    return (
      <View style={styles.WriteContainer}>
        <TextField label="제목" characterRestriction={30} tintColor="#9932cc" />
        <TextInput
          multiline={true}
          placeholder="이 곳을 눌러서 글을 작성할 수 있습니다."
          style={{
            height: RNU.vh(50),
            textAlignVertical: 'top',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  WriteContainer: {
    backgroundColor: 'white',
    margin: 0,
    marginBottom: 10,
    height: '100%',
  },
});
