import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import { ShadowButton } from '../'
import {Images, Colors} from '../../themes'
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Badge
              size={23}
              style={{ container: [styles.status, {backgroundColor: Colors.online}] }}
            >
              <Image source={Images.img_me} style={styles.photo} />
            </Badge>
            <Text style={styles.name}> Marco Mustapic </Text>
            <View style={styles.seperator} />
          </View>

          <View style={styles.routes}>
            <TouchableOpacity style={styles.route} onPress={this.navigateToScreen('FileSharing')}>
                <Text style={styles.pageName}> Secure File Sharing </Text>
            </TouchableOpacity>
            <View style={styles.seperator} />
            <TouchableOpacity style={styles.route} onPress={this.navigateToScreen('ChangeBackup')}>
                <Text style={styles.pageName}> Change Backup </Text>
            </TouchableOpacity>
            <View style={styles.seperator} />
            <TouchableOpacity style={styles.route} onPress={this.navigateToScreen('EditProfile')}>
                <Text style={styles.pageName}> Edit Profile </Text>
            </TouchableOpacity>
            <View style={styles.seperator} />
            <TouchableOpacity style={styles.route} onPress={this.navigateToScreen('OutOffice')}>
                <Text style={styles.pageName}> Out of Office </Text>
            </TouchableOpacity>
            <View style={styles.seperator} />
            <TouchableOpacity style={styles.route} onPress={this.navigateToScreen('Support')}>
                <Text style={styles.pageName}> Support </Text>
            </TouchableOpacity>
            <View style={styles.seperator} />
            <TouchableOpacity style={styles.route} onPress={this.navigateToScreen('Settings')}>
                <Text style={styles.pageName}> Settings </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.seperator} />
            <ShadowButton label='Logout' />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;