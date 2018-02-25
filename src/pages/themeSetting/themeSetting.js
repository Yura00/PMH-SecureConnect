import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle, Colors } from '../../themes'
import styles from './themeSetting.style'

class ThemeSetting extends Component {
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
          <Text style={styles.themeType}> Colors </Text>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> FB Blue </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> Navy </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> Turquoise </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>

          <View style={styles.padding} />

          <Text style={styles.themeType}> Fonts </Text>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> Font 1 </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> Font 2 </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> Font 3 </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onPress()}>
            <Text style={styles.name}> Font 4 </Text>
            <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ThemeSetting;