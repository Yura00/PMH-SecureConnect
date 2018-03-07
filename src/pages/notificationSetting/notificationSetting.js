import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle, Colors } from '../../themes'
import styles from './notificationSetting.style'

class NotificationSetting extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (<TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
      </TouchableOpacity>)
  })
  constructor(props) {
    super(props);
    this.state ={
      soundType: 0,
      notificationType: 0
    }
  }

  onSoundTypeChanges (type) {
    this.setState({ soundType: type })
  }
  onNotificationTypeChanges (type) {
    this.setState({ notificationType: type })
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar />

        <View style={styles.mainContainer}>
          <Text style={styles.themeType}> Sounds </Text>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(0)}>
            <Text style={styles.name}> None </Text>
            { this.state.soundType === 0 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(1)}>
            <Text style={styles.name}> Aurora </Text>
            { this.state.soundType === 1 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(2)}>
            <Text style={styles.name}> Bamboo </Text>
            { this.state.soundType === 2 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(3)}>
            <Text style={styles.name}> Bell </Text>
            { this.state.soundType === 3 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(4)}>
            <Text style={styles.name}> Chord </Text>
            { this.state.soundType === 4 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(5)}>
            <Text style={styles.name}> Circles </Text>
            { this.state.soundType === 5 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onSoundTypeChanges(6)}>
            <Text style={styles.name}> Complete </Text>
            { this.state.soundType === 6 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>

          <View style={styles.padding} />

          <TouchableOpacity style={styles.listItem} onPress={() => this.onNotificationTypeChanges(0)}>
            <Text style={styles.name}> Vibrate </Text>
            { this.state.notificationType === 0 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onNotificationTypeChanges(1)}>
            <Text style={styles.name}> LED </Text>
            { this.state.notificationType === 1 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NotificationSetting;