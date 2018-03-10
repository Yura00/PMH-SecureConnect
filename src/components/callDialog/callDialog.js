import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs'
import { Images } from '../../themes'
import styles from './callDialog.style'

class CallDialog extends Component {
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
    return (
      <Dialog
        contentStyle={styles.content}
        visible={this.state.showDialog}
        onTouchOutside={() => this.setState({showDialog: false})}
        animationType="fade"
      >

        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.videoButton}>
              <Image source={Images.icon_camera} style={styles.videoIcon}/>
            </TouchableOpacity>
            <Text style={{color: 'black'}}>Video</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.audioButton}>
              <Image source={Images.icon_phone} style={styles.audioIcon}/>
            </TouchableOpacity>
            <Text style={{color: 'black'}}>Audio</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.footer} onPress={() => this.setState({showDialog: !this.state.showDialog})}>
          <Text style={styles.cancelButton}> CANCEL </Text>
        </TouchableOpacity>

      </Dialog>
    );
  }
}

export default CallDialog;
