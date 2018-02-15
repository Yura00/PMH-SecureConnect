import React from 'react'
import { } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import MainTabs from '../mainTabs'
import Settings from '../settings'

const RootDrawer = DrawerNavigator(
    {
        MainTabs: {
            screen: MainTabs,
        },
        Settings: {
            screen: Settings
        }
    }
)

export default RootDrawer