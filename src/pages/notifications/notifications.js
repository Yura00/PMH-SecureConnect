import React from 'react';
import { View, Text } from 'react-native';
import styles from './notifications.style'

const Notifications = () => (
  <View style={styles.container}>
    <Text> Notifications </Text>
  </View>
);

Notifications.navigationOptions = {
  title: 'Notifications Screen',
};

export default Notifications;