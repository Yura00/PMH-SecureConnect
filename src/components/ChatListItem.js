import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

class ChatListItem  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
        <Text style={styles.text}>
          {`${this.props.name.first} ${this.props.name.last}`}
        </Text>
      </View>
    );
  }
}

export default ChatListItem;
