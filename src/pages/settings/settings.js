import React from 'react';
import { View, Text } from 'react-native';
import styles from './settings.style'

const Settings = () => (
  <View style={styles.container}>
    <Text> settings </Text>
  </View>
);

Settings.navigationOptions = {
  title: 'Settings Screen',
};

export default Settings;