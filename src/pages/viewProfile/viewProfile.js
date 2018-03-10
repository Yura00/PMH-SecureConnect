import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TopBar } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyle } from '../../themes'
import styles from './viewProfile.style'
import { Images, Colors } from '../../themes'

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Amaily Holy',
      title: 'CEO',
      department: 'CNA(L-MS61)',
      phone: '+1 915 320 2987',
      email: 'amily@gmail.com',
      message: 'Be back in 20 mins...'
    }
  }

  render() {
    const userData = this.props.navigation.state.params.data
    const username = userData.name.first + ' ' + userData.name.last

    var statusColor = Colors.offline
    if (userData.status === 'online') {
      statusColor = Colors.online
    } else if (userData.status === 'away') {
      statusColor = Colors.away
    } else if (userData.status === 'disturb') {
      statusColor = Colors.disturb
    }

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
            <Text style={styles.itemValue}> {this.state.title} </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}> Department </Text>
            <Text style={styles.itemValue}> {this.state.department} </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}> Email </Text>
            <Text style={styles.itemValue}> {userData.email} </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}> Message </Text>
            <Text style={styles.itemValue}> {this.state.message} </Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.itemTitle}> Online Status </Text>
            <View style={styles.statusSelection}>
              <View style={styles.statusItem}>
                <View style={
                    [styles.statusIcon,
                    {
                      backgroundColor: userData.status === 'online' ? Colors.online : 'transparent',
                      borderWidth: userData.status === 'online' ? 0 : 1
                    }]
                  }
                />
                <Text style={styles.statusText}> Online </Text>
              </View>
              <View style={styles.statusItem}>
              <View style={
                    [styles.statusIcon,
                    {
                      backgroundColor: userData.status === 'offline' ? Colors.offline : 'transparent',
                      borderWidth: userData.status === 'offline' ? 0 : 1
                    }]
                  }
                />
                <Text style={styles.statusText}> Offline </Text>
              </View>
              <View style={styles.statusItem}>
                <View style={
                    [styles.statusIcon,
                    {
                      backgroundColor: userData.status === 'away' ? Colors.away : 'transparent',
                      borderWidth: userData.status === 'away' ? 0 : 1
                    }]
                  }
                />
                <Text style={styles.statusText}> Away </Text>
              </View>
              <View style={styles.statusItem}>
                <View style={
                    [styles.statusIcon,
                    {
                      backgroundColor: userData.status === 'disturb' ? Colors.disturb : 'transparent',
                      borderWidth: userData.status === 'disturb' ? 0 : 1
                    }]
                  }
                />
                <Text style={styles.statusText}> Do not disturb </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ViewProfile;