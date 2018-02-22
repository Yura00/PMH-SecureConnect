import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Swipeable from 'react-native-swipeable'

import styles from './chatListItem.style'
import { Colors } from '../../themes'

class ChatListItem  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var statusColor = Colors.offline
    if (this.props.status === 'online') {
      statusColor = Colors.online
    } else if (this.props.status === 'away') {
      statusColor = Colors.away
    } else if (this.props.status === 'disturb') {
      statusColor = Colors.disturb
    }

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
              style={{ container: [styles.status, {backgroundColor: statusColor}] }}
            >
              {/* <Image source={{ uri: this.props.picture.large}} style={styles.photo} /> */}
            </Badge>

            <View style={styles.container1}>
              <Text style={styles.name}>
                {`${this.props.name.first} ${this.props.name.last}`}
              </Text>
              <Text style={styles.message}>
                {this.props.location.street}
              </Text>
            </View>

            <View style={styles.container2}>
              <Text style={styles.time}>
                3:35 PM
              </Text>
              <Badge style={{ container: styles.unreadBadge }} size={15} text="3" />
            </View>

            <View style={styles.container2}>
              <MaterialIcons name='chevron-right' size={30} color={'gray'} />
            </View>

          </View>
        </Swipeable>
      </ThemeProvider>
    );
  }
}

export default ChatListItem;
