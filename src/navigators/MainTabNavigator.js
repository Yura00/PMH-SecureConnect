import React from 'react';
import { TabNavigator, Icon } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'
import { Contacts, Chats, Notifications, Channels} from '../pages'
import { Images, Colors } from '../themes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MainTabNavigator = TabNavigator ({
    Contacts: {
      screen: Contacts,
      path: '/',
      navigationOptions: {
        title: 'Contacts',
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ tintColor }) => {return (<Image source={require('../assets/icon_tab_contacts.png')} style={[styles.icon, { tintColor: tintColor }]} />)}
      }
    },
    Chats: {
      screen: Chats,
      path: '/chats',
      navigationOptions: {
        tabBarLabel: 'chats',
        tabBarIcon: ({ tintColor }) => {return (<Image source={require('../assets/icon_tab_chats.png')} style={[styles.icon, { tintColor: tintColor }]} />)}
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        title: 'Notifications',
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => {return (<Image source={require('../assets/icon_tab_notifications.png')} style={[styles.icon, { tintColor: tintColor }]} />)}
      }
    },
    Channels: {
      screen: Channels,
      navigationOptions: {
        tabBarLabel: 'Channels',
        tabBarIcon: ({ tintColor }) => {return (<Image source={require('../assets/icon_tab_channels.png')} style={[styles.icon1, { tintColor: tintColor }]} />)}
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.default,
      showIcon: true,
      tabStyle: {
          padding: 5, margin:0,   //Padding 0 here
      },
      iconStyle: {
          width: 20,
          height: 20,
      },
    },
    animationEnabled: true,
    gestureEnabled: false,
    swipeEnabled: false
  }
);

const styles = StyleSheet.create({
  icon: {
    top: 2,
    width: 20,
    height: 20,
  },
  icon1: {
    width: 23,
    height: 23,
  },
});

export default MainTabNavigator
