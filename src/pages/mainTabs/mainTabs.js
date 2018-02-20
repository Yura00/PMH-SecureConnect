import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import styles from './mainTabs.style'

import Contacts from '../contacts'
import Chats from '../chats'
import Notifications from '../notifications'
import Channels from '../channels'

const MainTabs = TabNavigator ({
    Contacts: {
      screen: Contacts,
      path: '/',
      navigationOptions: {
        title: 'Contacts',
        tabBarLabel: 'Contacts'
      }
    },
    Chats: {
      screen: Chats,
      path: '/chats',
      navigationOptions: {
        title: 'Chats',
        tabBarLabel: 'Chats'
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        title: 'Notifications',
        tabBarLabel: 'Notifications'
      }
    },
    Channels: {
      screen: Channels,
      navigationOptions: {
        title: 'Channels',
        tabBarLabel: 'Channels'
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    gestureEnabled: false,
    swipeEnabled: false
  }
);

export default MainTabs
