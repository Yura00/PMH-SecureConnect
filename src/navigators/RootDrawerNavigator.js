import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import MainStackNavigator from './MainStackNavigator'
import { FileSharing, Settings } from '../pages'
import { CustomDrawer } from '../components'

const RootDrawerNavigator = DrawerNavigator(
    {
        MainStackNavigator: {
            screen: MainStackNavigator
        },
        FileSharing: {
            screen: FileSharing
        },
        Settings: {
            screen: Settings
        }
    },
    {
        contentComponent: CustomDrawer,
        drawerWidth: 250,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0f5fad',
            },
            headerTintColor: 'white'
          }
    }
)

export default RootDrawerNavigator