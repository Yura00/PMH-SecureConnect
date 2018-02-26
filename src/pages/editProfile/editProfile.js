import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './editProfile.style'
import { Images } from '../../themes'

class EditProfile  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Amaily Holy',
      title: 'CEO',
      department: 'CNA(L-MS61)',
      phone: '+1 915 320 2987',
      email: 'amily@gmail.com'
    }
  }

  render() {
    return (
        <View style={GlobalStyle.pageContainer}>
          <View style={styles.topBar}>
            <Image source={Images.bg_profile} style={styles.topBackground} />
            <TouchableOpacity style={styles.drawerContainer} onPress={() => this.props.navigation.navigate('MainStackNavigator')}>
              <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
            </TouchableOpacity>
            <View style={styles.titleContent}>
              <Text style={GlobalStyle.pageTitle}> Edit Profile </Text>
            </View>
            <Image source={Images.img_me} style={styles.avatar} />
          </View>

          <View style={styles.mainContent}>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Name </Text>
              <TextInput style={styles.itemValue} value={this.state.name} onChangeText={(name) => this.setState({name: name})}/>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Title </Text>
              <TextInput style={styles.itemValue} value={this.state.title} onChangeText={(title) => this.setState({title: title})}/>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Department </Text>
              <TextInput style={styles.itemValue} value={this.state.department} onChangeText={(department) => this.setState({department: department})}/>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Phone Number </Text>
              <TextInput style={styles.itemValue} value={this.state.phone} onChangeText={(phone) => this.setState({phone: phone})}/>
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Email </Text>
              <TextInput style={styles.itemValue} value={this.state.email} onChangeText={(email) => this.setState({email: email})}/>
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
            </View>
          </View>
        </View>
    );
  }
}

export default EditProfile;