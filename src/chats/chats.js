import React from 'react';
import { View, Text } from 'react-native';
import styles from './chats.style'

const Chats = () => (
  <View style={styles.container}>
    <Text> Chats </Text>
  </View>
);

Chats.navigationOptions = {
  title: 'Chats Screen',
};

export default Chats;