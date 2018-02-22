import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { TopBar, ChatListItem, Switch } from '../../components'
import styles from './support.style'

import ActionButton from 'react-native-action-button'
import data from '../mockData'

class Support  extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <TopBar onDrawer navigation={this.props.navigation}>
                <Text style={styles.title}> Support </Text>
            </TopBar>
            
        </View>
    );
  }
}

export default Support;