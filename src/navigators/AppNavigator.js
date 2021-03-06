import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Login, TouchID, VerificationCode } from '../pages';
import RootDrawerNavigator from './RootDrawerNavigator';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    Login: {
      screen: Login
    },
    TouchID: {
      screen: TouchID
    },
    VerificationCode: {
      screen: VerificationCode
    },
    RootDrawerNavigator: {
      screen: RootDrawerNavigator
    }
  },
  {
    // initialRouteName: 'RootDrawerNavigator',//test
    initialRouteName: 'Login',
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    }
  }
);

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
