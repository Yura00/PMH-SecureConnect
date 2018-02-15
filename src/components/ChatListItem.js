import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable'

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
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  }
});

class ChatListItem  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    //   <View style={styles.container}>
    //   <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
    //   <Text style={styles.text}>
    //     {`${this.props.name.first} ${this.props.name.last}`}
    //   </Text>
    // </View>
      <Swipeable
        leftButtonWidth={100}
        rightButtonWidth={100}
        leftButtons={[
          <TouchableOpacity style={[styles.leftSwipeItem, {backgroundColor: 'papayawhip'}]}>
            <Text>Delete</Text>
          </TouchableOpacity>,
          <TouchableOpacity style={[styles.leftSwipeItem, {backgroundColor: 'olivedrab'}]}>
            <Text>Pin</Text>
          </TouchableOpacity>
        ]}
        rightButtons={[
          <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
            <Text>1</Text>
          </TouchableOpacity>,
          <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
            <Text>2</Text>
          </TouchableOpacity>
        ]}
        // onLeftButtonsOpenRelease={onOpen}
        // onLeftButtonsCloseRelease={onClose}
      >
        <View style={styles.container}>
          <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
          <Text style={styles.text}>
            {`${this.props.name.first} ${this.props.name.last}`}
          </Text>
        </View>
      </Swipeable>
    );
  }
}

export default ChatListItem;
