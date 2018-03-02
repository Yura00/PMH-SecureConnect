import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Images, Colors} from '../../themes'

import styles from './topBar.style'

class TopBar  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let height = 30
    if (this.props.onDrawer) {
      height = 80
    } else if (this.props.hasContent) {
      height = 35
    }
    return (
      <View style={[styles.container, {height: height}]}>
        {this.props.onDrawer 
          ? <TouchableOpacity style={styles.drawerContainer} onPress={() => this.props.navigation.navigate('MainStackNavigator')}>
              <MaterialIcons name='chevron-left' size={30} color={'white'} />
            </TouchableOpacity>
          : null
        }
        <View style={styles.background} />
        <View style={styles.paddingTop} />
        <View style={styles.content}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

TopBar.propTypes = {
  navigation: PropTypes.object
};

export default TopBar;
