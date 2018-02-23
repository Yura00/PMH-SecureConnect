import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { TopBar, ChatListItem, Switch } from '../../components'
import { GlobalStyle } from '../../themes'
import styles from './changeBackup.style'

import ActionButton from 'react-native-action-button'
import data from '../mockData'

class ChangeBackup  extends Component {
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
            <TopBar onDrawer navigation={this.props.navigation}>
                <Text style={GlobalStyle.pageTitle}> Change Backup </Text>
            </TopBar>
            
        </View>
    );
  }
}

export default ChangeBackup;