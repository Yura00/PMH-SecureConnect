import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Swipeable from 'react-native-swipeable'
import { LeftSwipeItem, RightSwipeItem, CallDialog } from '../'
import styles from './chatListItem.style'
import { Colors, Images } from '../../themes'

class ChatListItem  extends Component {
  constructor(props) {
    super(props);
  }

  onPress () {
    this.props.onPress ? this.props.onPress() : {}
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
          leftButtonWidth={80}
          rightButtonWidth={80}
          leftButtons={[
            <LeftSwipeItem 
              source={Images.icon_pin} 
              label='Pin' 
              size={80}
              backgroundColor={Colors.lightgreen}
              onPress={() => console.log('Pin clicked')}
            />,
            <LeftSwipeItem 
              source={Images.icon_delete} 
              label='Delete' 
              size={80}
              backgroundColor={Colors.red}
              onPress={() => console.log('Delete clicked')}
            />
          ]}
          rightButtons={[
            <RightSwipeItem 
              source={Images.icon_user_plus} 
              label='Add' 
              size={80}
              backgroundColor={Colors.default}
              onPress={() => console.log('Add clicked')}
            />
          ]}
        >
          <TouchableOpacity style={styles.container} onPress={() => this.onPress()}>

            <Badge
              size={15}
              style={{ container: [styles.status, {backgroundColor: statusColor}] }}
            >
              <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
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
              <MaterialIcons name='chevron-right' size={30} color={'lightgray'} />
            </View>

          </TouchableOpacity>
        </Swipeable>
      </ThemeProvider>
    );
  }
}

export default ChatListItem;
