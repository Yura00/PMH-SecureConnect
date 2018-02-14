import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from '../pages/login';
import RootDrawer from '../pages/rootDrawer';
import ProfileScreen from '../pages/ProfileScreen';
import AppRoot from '../pages/AppRoot';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  Login: { screen: Login },
  RootDrawer: { screen: RootDrawer },
  Profile: { screen: ProfileScreen },
  AppRoot: { screen: AppRoot }
},
{
  headerMode: 'none'
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigationReducer: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, navigationReducer } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationReducer,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationReducer: state.navigationReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);