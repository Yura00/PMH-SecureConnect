import React from 'react';
import { View, Text } from 'react-native';
import styles from './contacts.style'

const Contacts = () => (
  <View style={styles.container}>
    <Text> Contacts </Text>
  </View>
);

Contacts.navigationOptions = {
  title: 'Contacts Screen',
};

export default Contacts;