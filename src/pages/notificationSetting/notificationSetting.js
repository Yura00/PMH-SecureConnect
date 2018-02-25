import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './notificationSetting.style'

class NotificationSetting extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (<TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
      </TouchableOpacity>)
  })
  constructor(props) {
    super(props);

    this.state = {
      subject: ''
    }
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar />

        <View style={styles.mainContainer}>
          {/* <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Theme </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chooseContact}>
            <Text style={styles.text}> Notifications </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

export default NotificationSetting;