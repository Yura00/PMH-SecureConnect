import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Swipeable from 'react-native-swipeable'
import { LeftSwipeItem, RightSwipeItem, CallDialog } from '../'
import styles from './channelListItem.style'
import { Colors, Images } from '../../themes'

class ChannelListItem  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var statusColor = Colors.offline
    // if (this.props.status === 'online') {
    //   statusColor = Colors.online
    // } else if (this.props.status === 'away') {
    //   statusColor = Colors.away
    // } else if (this.props.status === 'disturb') {
    //   statusColor = Colors.disturb
    // }

    return (
      <ThemeProvider>
        <Swipeable
          rightButtonWidth={80}
          rightButtons={[
            <RightSwipeItem 
                source={Images.icon_pen} 
                label='Rename' 
                size={80}
                backgroundColor={Colors.lightgreen}
                onPress={() => console.log('Delete clicked')}
            />,
            <RightSwipeItem 
                source={Images.icon_delete} 
                label='Delete' 
                size={80}
                backgroundColor={Colors.red}
                onPress={() => console.log('Delete clicked')}
            />
          ]}
        >
        <View style={styles.container}>
            <Image source={Images.img_me} style={styles.photo} />

            <View style={styles.container1}>
                <Text style={styles.name}>
                    {this.props.location.street}
                </Text>
            </View>

        </View>
        </Swipeable>
      </ThemeProvider>
    );
  }
}

export default ChannelListItem;
