import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './viewProfile.style'
import { Images, Colors } from '../../themes'

class ViewProfile  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Amaily Holy',
      title: 'CEO',
      department: 'CNA(L-MS61)',
      phone: '+1 915 320 2987',
      email: 'amily@gmail.com'
    }
    console.log(props)
  }

  render() {
    const userData = this.props.navigation.state.params.data
    const username = userData.name.first + ' ' + userData.name.last
    const message = 'Be back in 20 mins...'
    return (
        <View style={GlobalStyle.pageContainer}>
          <View style={styles.topBar}>
            <Image source={Images.bg_profile} style={styles.topBackground} />
            <TouchableOpacity style={styles.drawerContainer} onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
            </TouchableOpacity>
            <Image source={Images.img_me} style={styles.avatar} />
            <View style={styles.titleContent}>
              <Text style={styles.username}> {username} </Text>
              <Text style={styles.phone}> {userData.phone} </Text>
            </View>
            <View style={styles.topActionscontainer}>
              <TouchableOpacity style={[styles.actionContainer, {backgroundColor: Colors.lightblue}]}>
                <Image source={Images.icon_comment_left} style={styles.actionIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionContainer, {backgroundColor: Colors.green, bottom: -20}]}>
                <Image source={Images.icon_emergency} style={styles.actionIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionContainer, {backgroundColor: Colors.orange, bottom: -20}]}>
                <Image source={Images.icon_camera} style={styles.actionIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionContainer, {backgroundColor: Colors.green}]}>
                <Image source={Images.icon_phone} style={styles.actionIcon}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Title </Text>
              <TextInput style={styles.itemValue} value={this.state.title} onChangeText={(title) => this.setState({title: title})}/>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Department </Text>
              <TextInput style={styles.itemValue} value={this.state.department} onChangeText={(department) => this.setState({department: department})}/>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Email </Text>
              <TextInput style={styles.itemValue} value={userData.email} onChangeText={(email) => this.setState({email: email})}/>
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Message </Text>
              <TextInput style={styles.itemValue} value={message} onChangeText={(email) => this.setState({email: email})}/>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.itemTitle}> Online Status </Text>
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
              <Image source={Images.icon_verify} style={styles.verifyIcon} />
            </View>
          </View>
        </View>
    );
  }
}

export default ViewProfile;