import React from 'react';
import { TabNavigator, Icon } from 'react-navigation'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
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
        tabBarIcon: ({ tintColor }) => {return (<Image source={ tintColor !== Colors.default ? Images.icon_tab_contacts : Images.icon_tab_contacts_active} style={styles.icon} />)}
      }
    },
    Chats: {
      screen: Chats,
      path: '/chats',
      navigationOptions: {
        title: 'Chats',
        headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}],
        tabBarLabel: 'Chats',
        tabBarIcon: ({ tintColor }) => {
          return (
            <View style={styles.tmp}>
            <Badge
              size={15}
              text='5'
              style={{ container: styles.chatBadgeContainer, content: styles.chatBadgeContent }}
            >
              <Image source={ tintColor !== Colors.default ? Images.icon_tab_chats : Images.icon_tab_chats_active} style={styles.icon} />
            </Badge>
            </View>
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
        tabBarIcon: ({ tintColor }) => {return (<Image source={ tintColor !== Colors.default ? Images.icon_tab_notifications : Images.icon_tab_notifications_active} style={styles.icon} />)}
      }
    },
    Channels: {
      screen: Channels,
      navigationOptions: {
        title: 'Channels',
        headerTitleStyle: [GlobalStyle.pageTitle, {marginTop: 30}],
        tabBarLabel: 'Channels',
        tabBarIcon: ({ tintColor }) => {return (<Image source={ tintColor !== Colors.default ? Images.icon_tab_channels : Images.icon_tab_channels_active} style={styles.icon} />)}
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.default,
      inactiveTintColor: 'gray',
      showIcon: true,
      upperCaseLabel: false,
      style: {
        backgroundColor: '#f8f8f8',
        height: 60
      },
      tabStyle: {
        // padding: 5,
        margin: 0, //Padding 0 here
      },
      indicatorStyle: {
        opacity: 0
      },
      iconStyle: {
        width: 50,
        height: 30,
      },
      labelStyle: {
        margin: 0,
        marginBottom: 5,
        fontSize: 11,
      }
    },
    animationEnabled: true,
    gestureEnabled: false,
    swipeEnabled: false
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  icon1: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  tmp: {
    width: 50,
    height: 30,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatBadgeContainer: {
    position: 'absolute',
    top: -2,
    right: -10,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: Colors.red,
  },
  chatBadgeContent: {
    fontSize: 8,
  }
});

export default MainTabNavigator
