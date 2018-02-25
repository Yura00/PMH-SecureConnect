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
          <View style={styles.iconNewGroupContainer}>
            <Image source={Images.icon_channel} style={styles.photo} />
          </View>
            {/* <Image source={Images.icon_channel} style={styles.photo} /> */}

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
