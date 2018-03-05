import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
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
          title: 'New Group',
          headerTitleStyle: GlobalStyle.pageTitle
        }
      }
    },
    {
      initialRouteName: 'MainTabNavigator',
      navigationOptions: {
        headerLeft: (<View />), // center header title for Android
        headerRight: (<View />), // center header title for Android
        gesturesEnabled: false,
        headerTintColor: 'white',
        // headerTitleStyle: {
        //   // textAlign: 'center', // center header title for Android
        //   // alignSelf:'center', // center header title for Android
        // },
        headerStyle: {
          backgroundColor: Colors.default,
          borderBottomWidth: 0, // remove header bottom shadow for iOS
          elevation:0, // remove header bottom shadow for Android
        },
      }
    }
  );

  export default MainStackNavigator
