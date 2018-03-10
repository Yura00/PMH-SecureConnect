import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs'

import styles from './emergencyDialog.style'

class EmergencyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: props.showDialog
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({showDialog: nextProps.showDialog})
  }

  render() {
    const { userData } = this.props
    if (userData) {
      return (
        <Dialog
          visible={this.state.showDialog}
          onTouchOutside={() => this.setState({showDialog: false})}
          contentStyle={styles.content}
          animationType="fade"
        >
          <Text style={styles.title}> Emergency Message </Text>
          <View style={styles.userInfo}>
            <Image source={{ uri: userData.picture.large}} style={styles.photo} />
            <Text style={styles.name}> {`${userData.name.first} ${userData.name.last}`} </Text>
          </View>
          <TextInput
            style={styles.message}
            multiline
            underlineColorAndroid='transparent'
            placeholder='Message...'
          />
          <Text style={styles.note}> (Max Characters allowed: 200) </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.buttonText}> Send </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => this.setState({showDialog: false})}>
              <Text style={styles.buttonText}> Cancel </Text>
            </TouchableOpacity>
          </View>

        </Dialog>
      );
    }
    else {
      return null
    }
  }
}

export default EmergencyDialog
