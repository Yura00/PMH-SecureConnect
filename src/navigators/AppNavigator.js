import React from 'react';
import { Platform } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import RootTabsInDrawer from '../components/RootTabsInDrawer';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  RootTabsInDrawer: { screen: RootTabsInDrawer },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  Index: { screen: LoginScreen }
},
{
  initialRouteName: 'Index',
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
