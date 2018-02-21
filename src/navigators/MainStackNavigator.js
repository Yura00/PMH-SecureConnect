import { StackNavigator } from 'react-navigation';
import { Chat } from '../pages'
import MainTabNavigator from './MainTabNavigator'

export const MainStackNavigator = StackNavigator(
    {
      MainTabNavigator: { 
        screen: MainTabNavigator
      },
      Chat: { 
        screen: Chat 
      }
    },
    {
      initialRouteName: 'MainTabNavigator',
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#0f5fad',
        },
        headerTintColor: 'white'
      }
    }
  );

  export default MainStackNavigator
