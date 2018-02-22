import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dialog } from 'react-native-simple-dialogs'

import styles from './topBar.style'

class TopBar  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let height = 35
    if (this.props.onDrawer) {
      height = 80
    }
    return (
      <View style={[styles.container, {height: height}]}>
        <View style={styles.background} />
        <View style={styles.paddingTop} />
        <View style={styles.content}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default TopBar;
