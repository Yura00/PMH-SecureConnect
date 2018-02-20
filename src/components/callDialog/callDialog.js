import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
            title="Custom Dialog"
            onTouchOutside={() => this.setState({showDialog: false})}
            contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
            animationType="fade">
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
              <MaterialCommunityIcons name='phone-plus' size={30} color={'white'} style={styles.rightSwipeItemIcon} />
              <Text style={styles.rightSwipeItemText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orange'}]}>
              <MaterialCommunityIcons name='video' size={30} color={'white'} style={styles.rightSwipeItemIcon} />
              <Text style={styles.rightSwipeItemText}>Audio</Text>
            </TouchableOpacity>
            <Button onPress={() => this.setState({showDialog: false})} style={{ marginTop: 10 }} title="CANCEL" />
        </Dialog>
    );
  }
}

export default CallDialog;
