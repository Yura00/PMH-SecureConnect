import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './settings.style'

class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (<TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.navigate('MainStackNavigator')}>
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
          <TouchableOpacity style={styles.chooseContact} onPress={() => this.props.navigation.navigate('ThemeSetting', {data: data})}>
            <Text style={styles.text}> Theme </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chooseContact} onPress={() => this.props.navigation.navigate('NotificationSetting', {data: data})}>
            <Text style={styles.text}> Notifications </Text>
            <MaterialCommunityIcons name='chevron-right' size={25} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Settings;