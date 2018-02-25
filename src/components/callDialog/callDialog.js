import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import { Dialog } from 'react-native-simple-dialogs'

import styles from './callDialog.style'

class CallDialog  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showDialog: props.showDialog
    }
  }

  render() {
    var statusColor = 'gray'
    if (this.props.status === 'online') {
      statusColor = 'green'
    } else if (this.props.status === 'away') {
      statusColor = 'orange'
    } else if (this.props.status === 'disturb') {
      statusColor = 'darkred'
    }

    return (
      <Dialog
        visible={this.state.showDialog}
        onTouchOutside={() => this.setState({showDialog: false})}
        contentStyle={{ justifyContent: 'center', alignItems: 'center', padding: 0, backgroundColor: 'white', borderRadius: 5 }}
        animationType="fade"
      >

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View style={{flexDirection: 'column',flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 36, height: 36, borderRadius: 36, backgroundColor: Colors.orange, padding: 8, margin: 5}}>
              <Image source={Images.icon_camera} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
            </View>
            <Text style={{color: 'black'}}>Video</Text>
          </View>
          <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 36, height: 36, borderRadius: 36, backgroundColor:Colors.green, padding: 10, margin: 5}}>
              <Image source={Images.icon_phone} style={{width: 16, height: 16, resizeMode: 'contain'}}/>
            </View>
            <Text style={{color: 'black'}}>Audio</Text>
          </View>
        </View>

        <View style={{marginTop: 10, alignSelf: 'stretch', borderTopColor: 'lightgray', borderTopWidth: 1}}>
          <Button onPress={() => this.setState({showDialog: !this.state.showDialog})} style={{ marginTop: 10, flex: 1 }} title="Cancel" />
        </View>

      </Dialog>
    );
  }
}

export default CallDialog;
