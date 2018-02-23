import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

import styles from './rightSwipeItem.style'

class RightSwipeItem  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size,
            iconWidth: props.size / 2,
            textWidth: props.size / 2
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
                style={[styles.icon, {marginLeft: ((this.state.size - this.state.iconWidth) / 2)}]}
            />
            <Text
                onLayout={(event)=>this.setState({textWidth: event.nativeEvent.layout.width})}
                style={[styles.text, {marginLeft: ((this.state.size - this.state.textWidth) / 2)}]}
            >
                {this.props.label}
            </Text>
        </TouchableOpacity>
    );
  }
}

export default RightSwipeItem;
