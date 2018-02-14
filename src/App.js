

import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './config/configureStore'
import AppWithNavigationState from './navigators/AppNavigator';

import 'regenerator-runtime/runtime';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)
export default App;