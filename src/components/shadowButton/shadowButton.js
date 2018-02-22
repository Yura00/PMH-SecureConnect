import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import {Images, Colors} from '../../themes'

import styles from './shadowButton.style'

class ShadowButton  extends Component {

    onPress () {
        if (this.props.onPress) {
            this.props.onPress()
        }
    }

  render() {
    return (
    <LinearGradient
        colors={['#3692ef', '#567ef2', '#7868f5']}
        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
        style={styles.container}
      >
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPress()}>
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default ShadowButton;
