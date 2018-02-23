import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { ChatListItem, TopBar } from '../../components'
import { GlobalStyle } from '../../themes'
import styles from './chats.style'

import ActionButton from 'react-native-action-button'
import data from '../mockData'

class Chats  extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar />
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(data) => <ChatListItem {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
        <ActionButton
          buttonColor="blue"
          onPress={() => { console.log("hi")}}
        />
      </View>
      
    );
  }
}

export default Chats;