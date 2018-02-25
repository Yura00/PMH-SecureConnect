import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import MainStackNavigator from './MainStackNavigator'
import SettingsStacknavigator from './SettingsStacknavigator'
import { FileSharing, ChangeBackup, EditProfile, OutOffice, Support } from '../pages'
import { SideMenu } from '../components'
import { Colors } from '../themes'

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
        SettingsStacknavigator: {
            screen: SettingsStacknavigator
        }
    },
    {
        contentComponent: SideMenu,
        drawerWidth: 250,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.default,
            },
            headerTintColor: 'white'
          }
    }
)

export default RootDrawerNavigator