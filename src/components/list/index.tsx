import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'

import Comment from '../../components/comment'

export default class List extends Component {

 
  render() {

    const {RenderItem} =  this.props ;

    return (
      <View>
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
       
        renderItem={({item}) => <RenderItem {...item} /> }
      />
      </View>
    )
  }
}