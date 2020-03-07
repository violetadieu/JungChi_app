import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import axios from 'axios';
import Dialog from 'react-native-dialog';
import Toast from 'react-native-root-toast';

export default class ReadHeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {dialogVisible: false};
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  showDialog = () => {
    this.setState({dialogVisible: true});
  };

  handleCancel = () => {
    this.setState({dialogVisible: false});
    //console.log(this.props.navigation.pop());
  };

  handleDelete = () => {
    this.deleteArticle();
    this.props.navigation.pop();
    this.setState({dialogVisible: false});
  };

  deleteArticle = () => {
    let delete_url = 'http://happydaram2.cafe24.com/article/delete?';
    let article_id = this.props.data.article_id;
    let social_id = this.props.data.social_id;
    delete_url += 'article_id=' + article_id;
    delete_url += '&social_id=' + social_id;

    axios
      .delete(delete_url)
      .then(() => Toast.show('글이 삭제되었습니다.'))
      .catch(() => Toast.show('글을 삭제하지 못했습니다.'));
  };

  log = () => {
    console.log('hihi');
  };
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress ? this.log : this.showMenu}>
        <Menu
          ref={this.setMenuRef}
          button={
            <HeaderButton
              {...this.props}
              IconComponent={Ionicons}
              iconSize={27}
              color="#140126"
              style={{marginRight: 10}}
            />
          }>
          <MenuItem
            onPress={() => {
              this.hideMenu();
            }}>
            수정
          </MenuItem>
          <MenuItem
            onPress={() => {
              this.hideMenu();
              this.showDialog();
            }}>
            삭제
          </MenuItem>
          <MenuDivider />
        </Menu>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Description>글을 삭제하시겠습니까?</Dialog.Description>
          <Dialog.Button label="취소" onPress={this.handleCancel} />
          <Dialog.Button label="확인" onPress={this.handleDelete} />
        </Dialog.Container>
      </TouchableOpacity>
    );
  }
}

export const ReadHeaderButtons = props => {
  return <HeaderButtons HeaderButtonComponent={ReadHeaderButton} {...props} />;
};
export {Item} from 'react-navigation-header-buttons';
