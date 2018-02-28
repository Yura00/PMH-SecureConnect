import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { ViewProfile, Chat, NewGroup, SelectContact } from '../pages'
import MainTabNavigator from './MainTabNavigator'
import { Images, Colors, GlobalStyle } from '../themes'
import { Drawer } from '../components'

export const MainStackNavigator = StackNavigator(
    {
      MainTabNavigator: { 
        screen: MainTabNavigator,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Drawer navigation={navigation} />
        })
      },
      ViewProfile: {
        screen: ViewProfile,
        navigationOptions: {
          header: null
        }
      },
      Chat: {
        screen: Chat
      },
      SelectContact: {
        screen: SelectContact,
        navigationOptions: {
          title: 'Select Contact',
          headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}]
        }
      },
      NewGroup: {
        screen: NewGroup,
        navigationOptions: {
          title: 'New Group'
        }
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
