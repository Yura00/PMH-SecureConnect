import React from 'react';
import { View, Text } from 'react-native';
import styles from './mainTabs.style'

const MainTabs = () => (
  <View style={styles.container}>
    <Text> MainTabs </Text>
  </View>
);

MainTabs.navigationOptions = {
  title: 'MainTabs Screen',
};

export default MainTabs;