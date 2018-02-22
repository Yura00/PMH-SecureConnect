import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

import styles from './leftSwipeItem.style'

class LeftSwipeItem  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconWidth: 45,
            textWidth: 45
        }
      }

  render() {
    return (
        <TouchableOpacity 
            style={[styles.container, {backgroundColor: this.props.backgroundColor}]}
            onPress={() => this.props.onPress()}
        >
            <Image 
            onLayout={(event)=>this.setState({iconWidth: event.nativeEvent.layout.width})}
            source={this.props.source}
            style={[styles.icon, {marginRight: (45 - this.state.iconWidth / 2)}]}
            />
            <Text
            onLayout={(event)=>this.setState({textWidth: event.nativeEvent.layout.width})}
            style={[styles.text, {marginRight: (45 - this.state.textWidth / 2)}]}
            >
                {this.props.label}
            </Text>
        </TouchableOpacity>
    );
  }
}

export default LeftSwipeItem;
