import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoardListItem = ({data}) => (
  <View style={styles.CardContainer}>
    <View style={styles.SubContainer}>
      <Text style={styles.CardTitle}>{data.subject}</Text>
    </View>

    <View style={styles.SubContainer}>
      <Text style={styles.CardContent}> {data.nickname}</Text>
      <Text style={{color: '#808080'}}>|</Text>
      <Text style={(styles.CardContent, {flex: 1})}> 조회 {data.hit}</Text>
      <Text style={{color: '#808080'}}>|</Text>
      <Text style={(styles.CardContent, {flex: 1})}>
        {' '}
        추천 {data.recommend}
      </Text>
      <View style={{flex: 3}} />
    </View>
  </View>
);
//작성일자, 제목, 작성자, 추천수,  조회수
const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    margin: 5,
  },
  SubContainer: {
    margin: 0,
    padding: 0,
    marginLeft: 7,
    flexDirection: 'row',
  },
  CardTitle: {
    width: '100%',
    fontSize: 15,
    padding: 3,
    fontFamily: 'NotoSansKR-Medium',
  },
  CardContent: {
    width: '100%',
    fontSize: 12,
    padding: 3,
    flex: 2,
  },
});

export default BoardListItem;
