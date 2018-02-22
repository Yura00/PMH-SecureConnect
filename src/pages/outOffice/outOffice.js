import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './outOffice.style'

class OutOffice  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar onDrawer navigation={this.props.navigation}>
            <Text style={styles.title}> Out of Office </Text>
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
          <TextInput style={styles.commentText} multiline placeholder='Enter your out of office message...'/>
        </View>

        <View style={styles.footerContainer}>
          <Button style={styles.button} large title='Save' />
        </View>
      </View>
    );
  }
}

export default OutOffice;