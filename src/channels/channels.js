import React from 'react';
import { View, Text } from 'react-native';
import styles from './channels.style'

const Channels = () => (
  <View style={styles.container}>
    <Text> Channels </Text>
  </View>
);

Channels.navigationOptions = {
  title: 'Channels Screen',
};

export default Channels;