import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
      <View style={styles.container}>
        <TopBar onDrawer navigation={this.props.navigation}>
            <Text style={styles.title}> Support </Text>
        </TopBar>

        <View style={styles.mainContainer}>
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}> Subject </Text>
            <TextInput style={styles.itemValue} value={this.state.subject} onChangeText={(subject) => this.setState({subject: subject})}/>
          </View>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Priority </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <Text style={styles.commentTitle}> Message </Text>
          <TextInput style={styles.commentText} multiline placeholder='Enter your out of office message...'/>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Attachment </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Button style={styles.button} large title='Submit' />
        </View>
      </View>
    );
  }
}

export default Support;