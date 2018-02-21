import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import MainStackNavigator from './MainStackNavigator'
import { Settings } from '../pages'

const RootDrawerNavigator = DrawerNavigator(
    {
        MainStackNavigator: {
            screen: MainStackNavigator
        },
        Settings: {
            screen: Settings
        }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0f5fad',
            },
            headerTintColor: 'white'
          }
    }
)

export default RootDrawerNavigator