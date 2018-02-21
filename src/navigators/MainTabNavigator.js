import React from 'react';
import { TabNavigator } from 'react-navigation'
import { Contacts, Chats, Notifications, Channels} from '../pages'

const MainTabNavigator = TabNavigator ({
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
      path: '/chats'
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        title: 'Notifications',
        tabBarLabel: 'Notifications'
      }
    },
    Channels: {
      screen: Channels
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    gestureEnabled: false,
    swipeEnabled: false
  }
);

export default MainTabNavigator
