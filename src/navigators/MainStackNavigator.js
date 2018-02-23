import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Chat } from '../pages'
import MainTabNavigator from './MainTabNavigator'
import { Images, Colors } from '../themes'
import { Drawer } from '../components'

export const MainStackNavigator = StackNavigator(
    {
      MainTabNavigator: { 
        screen: MainTabNavigator,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Drawer navigation={navigation} />
        })
      },
      Chat: { 
        screen: Chat 
      }
    },
    {
      initialRouteName: 'MainTabNavigator',
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

  export default MainStackNavigator
