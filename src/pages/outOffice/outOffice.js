import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TopBar, ShadowButton } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './outOffice.style'

class OutOffice  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar onDrawer navigation={this.props.navigation}>
            <Text style={GlobalStyle.pageTitle}> Out of Office </Text>
        </TopBar>

        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> From </Text>
            <Text style={styles.text}> 02-12-2018 04:29 PM </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> To </Text>
            <Text style={styles.text}> 02-12-2018 04:29 PM </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <Text style={styles.commentTitle}> Message </Text>
          <TextInput
            style={styles.commentText}
            multiline
            underlineColorAndroid='transparent'
            placeholder='Enter your out of office message...'
          />
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <ShadowButton style={styles.button} label='Save' />
          </View>
        </View>
      </View>
    );
  }
}

export default OutOffice;