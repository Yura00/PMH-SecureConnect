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
    this.state ={
      colorType: 0,
      fontType: 0
    }
  }

  onColorChanges (type) {
    this.setState({ colorType: type })
  }
  onFontChanges (type) {
    this.setState({ fontType: type })
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar />

        <View style={styles.mainContainer}>
          <Text style={styles.themeType}> Colors </Text>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onColorChanges(0)}>
            <View style={[styles.iconColor, {backgroundColor: Colors.default}]} />
            <Text style={styles.name}> FB Blue </Text>
            { this.state.colorType === 0 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onColorChanges(1)}>
            <View style={[styles.iconColor, {backgroundColor: Colors.navy}]} />
            <Text style={styles.name}> Navy </Text>
            { this.state.colorType === 1 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onColorChanges(2)}>
            <View style={[styles.iconColor, {backgroundColor: Colors.turquoise}]} />
            <Text style={styles.name}> Turquoise </Text>
            { this.state.colorType === 2 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>

          <View style={styles.padding} />

          <Text style={styles.themeType}> Fonts </Text>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onFontChanges(0)}>
            <Text style={styles.name}> Font 1 </Text>
            { this.state.fontType === 0 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onFontChanges(1)}>
            <Text style={styles.name}> Font 2 </Text>
            { this.state.fontType === 1 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onFontChanges(2)}>
            <Text style={styles.name}> Font 3 </Text>
            { this.state.fontType === 2 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => this.onFontChanges(3)}>
            <Text style={styles.name}> Font 4 </Text>
            { this.state.fontType === 3 && <MaterialCommunityIcons name='check' size={20} color={Colors.lightblue} /> }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ThemeSetting;