import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './fileSharing.style'

class FileSharing  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={GlobalStyle.pageContainer}>
          <TopBar onDrawer navigation={this.props.navigation}>
              <Text style={GlobalStyle.pageTitle}> File Sharing </Text>
          </TopBar>

          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.btnAddFile}>
              <MaterialCommunityIcons name='plus' size={35} color={'gray'} />
              <Text style={styles.btnText}> ADD FILE </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.chooseContact}>
              <Text style={styles.text}> Choose contact to share </Text>
              <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
            </TouchableOpacity>
            <Text style={styles.commentTitle}> Add comment </Text>
            <TextInput
              style={styles.commentText}
              multiline
              underlineColorAndroid='transparent'
              placeholder='Enter commnet...'
            />
          </View>
        </View>
    );
  }
}

export default FileSharing;