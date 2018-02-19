import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import Swipeable from 'react-native-swipeable'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
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
      <ThemeProvider>
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
            <Badge
              size={15}
              color='#005555'
              style={{ container: { bottom: -2, right: -2, backgroundColor: 'red', borderWidth: 2, borderColor: 'white'} }}
            >
              <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
            </Badge>
            <Text style={styles.text}>
              {`${this.props.name.first} ${this.props.name.last}`}
            </Text>
          </View>
        </Swipeable>
      </ThemeProvider>
    );
  }
}

export default ChatListItem;
