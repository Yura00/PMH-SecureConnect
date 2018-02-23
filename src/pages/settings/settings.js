import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './settings.style'

class Settings  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: ''
    }
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar onDrawer navigation={this.props.navigation}>
            <Text style={GlobalStyle.pageTitle}> Settings </Text>
        </TopBar>

        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Theme </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Notifications </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Settings;