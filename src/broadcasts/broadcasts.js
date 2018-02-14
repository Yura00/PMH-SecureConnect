import React from 'react';
import { View, Text } from 'react-native';
import styles from './broadcasts.style'

const Broadcasts = () => (
  <View style={styles.container}>
    <Text> Broadcasts </Text>
  </View>
);

Broadcasts.navigationOptions = {
  title: 'Broadcasts Screen',
};

export default Broadcasts;