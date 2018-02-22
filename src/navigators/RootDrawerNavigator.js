import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import MainStackNavigator from './MainStackNavigator'
import { FileSharing, ChangeBackup, EditProfile, OutOffice, Support, Settings } from '../pages'
import { SideMenu } from '../components'

const RootDrawerNavigator = DrawerNavigator(
    {
        MainStackNavigator: {
            screen: MainStackNavigator
        },
        FileSharing: {
            screen: FileSharing
        },
        ChangeBackup: {
            screen: ChangeBackup
        },
        EditProfile: {
            screen: EditProfile
        },
        OutOffice: {
            screen: OutOffice
        },
        Support: {
            screen: Support
        },
        Settings: {
            screen: Settings
        }
    },
    {
        contentComponent: SideMenu,
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