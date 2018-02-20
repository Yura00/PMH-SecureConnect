import React from 'react';
import { View, Text } from 'react-native';

import styles from './contactListSection.style'

const ContactListSection = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.sectionText}>{data}</Text>
  </View>
);

export default ContactListSection;
