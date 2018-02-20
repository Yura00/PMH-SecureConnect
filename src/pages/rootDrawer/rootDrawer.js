import React from 'react'
import { } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import MainTabs from '../mainTabs'
import Settings from '../settings'

const RootDrawer = DrawerNavigator(
    {
        MainTabs: {
            screen: MainTabs
        },
        Settings: {
            screen: Settings
        }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0f5fad',
                // borderBottomWidth: 0
            },
            headerTintColor: 'white'
          }
    }
)

export default RootDrawer