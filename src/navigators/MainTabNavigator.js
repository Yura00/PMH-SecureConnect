import React from 'react';
import { TabNavigator, Icon } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'
import { Contacts, Chats, Notifications, Channels} from '../pages'
import { Images, Colors, GlobalStyle } from '../themes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Badge, Avatar } from 'react-native-material-ui'

const MainTabNavigator = TabNavigator ({
    Contacts: {
      screen: Contacts,
      path: '/',
      navigationOptions: {
        title: 'Contacts',
        headerTitleStyle: GlobalStyle.pageTitle,
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ tintColor }) => {return (<Image source={Images.icon_tab_contacts} style={[styles.icon, { tintColor: tintColor }]} />)}
      }
    },
    Chats: {
      screen: Chats,
      path: '/chats',
      navigationOptions: {
        title: 'Chats',
        headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}],
        tabBarLabel: 'chats',
        tabBarIcon: ({ tintColor }) => {
          return (
            <Badge
              size={15}
              text='5'
              style={{ container: styles.chatBadgeContainer, content: styles.chatBadgeContent }}
            >
              <Image source={Images.icon_tab_chats} style={[styles.icon, { tintColor: tintColor }]} />
            </Badge>
          )
        }
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        headerTitleStyle: GlobalStyle.pageTitle,
        title: 'Notifications',
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => {return (<Image source={Images.icon_tab_notifications} style={[styles.icon, { tintColor: tintColor }]} />)}
      }
    },
    Channels: {
      screen: Channels,
      navigationOptions: {
        title: 'Channels',
        headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}],
        tabBarLabel: 'Channels',
        tabBarIcon: ({ tintColor }) => {return (<Image source={Images.icon_tab_channels} style={[styles.icon1, { tintColor: tintColor }]} />)}
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.default,
      showIcon: true,
      tabStyle: {
          padding: 5,
          margin:0, //Padding 0 here
      },
      iconStyle: {
          width: 20,
          height: 20,
      },
    },
    animationEnabled: true,
    gestureEnabled: false,
    swipeEnabled: false
  }
);

const styles = StyleSheet.create({
  icon: {
    top: 2,
    width: 20,
    height: 20,
  },
  icon1: {
    width: 23,
    height: 23,
  },
  chatBadgeContainer: {
    top: -2,
    right: -10,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: Colors.red
  },
  chatBadgeContent: {
    fontSize: 8
  }
});

export default MainTabNavigator
