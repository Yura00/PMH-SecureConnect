import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Settings, ThemeSetting, NotificationSetting } from '../pages'
import MainTabNavigator from './MainTabNavigator'
import { Images, Colors, GlobalStyle } from '../themes'
import { Drawer } from '../components'

export const SettingsStackNavigator = StackNavigator(
    {
      Settings: { 
        screen: Settings,
        navigationOptions: {
          title: 'Settings',
          headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}]
        }
        // navigationOptions: ({navigation}) => ({
        //     headerLeft: <Drawer navigation={navigation} />
        // })
      },
      ThemeSetting: { 
        screen: ThemeSetting,
        navigationOptions: {
          title: 'Theme',
          headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}]
        }
      },
      NotificationSetting: { 
        screen: NotificationSetting,
        navigationOptions: {
          title: 'Notification',
          headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}]
        }
      }
    },
    {
      initialRouteName: 'Settings',
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#0f5fad',
          borderBottomWidth: 0
        },
        headerTintColor: 'white'
      }
    }
  );

  export default SettingsStackNavigator
