import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TopBar, ShadowButton } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './support.style'

class Support  extends Component {
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
            <Text style={GlobalStyle.pageTitle}> Support </Text>
        </TopBar>

        <View style={styles.mainContainer}>
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}> Subject </Text>
            <TextInput
              style={styles.itemValue}
              value={this.state.subject}
              underlineColorAndroid='transparent'
              onChangeText={(subject) => this.setState({subject: subject})}
            />
          </View>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Priority </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <Text style={styles.commentTitle}> Message </Text>
          <TextInput
            style={styles.commentText}
            multiline
            underlineColorAndroid='transparent'
            placeholder='Enter your out of office message...'
          />
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Attachment </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <ShadowButton style={styles.button} label='Submit' />
          </View>
        </View>
      </View>
    );
  }
}

export default Support;