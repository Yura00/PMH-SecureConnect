import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './drawer.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

import {Images, Colors} from '../../themes'
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'

class Drawer extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
        <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Image style={styles.icon} source={Images.icon_drawer} color={'white'} />
        </TouchableOpacity>
    );
  }
}

export default Drawer;