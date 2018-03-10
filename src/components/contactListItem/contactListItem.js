import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Swipeable from 'react-native-swipeable'
import styles from './contactListItem.style'
import { Colors, Images } from '../../themes'
import { LeftSwipeItem, RightSwipeItem, CallDialog, Checkbox } from '../'

class ContactListItem  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      isChecked: false
    }
  }

  onPress () {
    if (this.props.fromNewGroup) {
      this.setState({ isChecked: !this.state.isChecked })
    }
     
    this.props.onPress ? this.props.onPress() : {}
  }

  measureLeft (event) {
		this.setState({leftLabelWidth: event.nativeEvent.layout.width})
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
      <TouchableOpacity>
        <Swipeable
          leftButtonWidth={90}
          rightButtonWidth={90}
          leftButtons={[
            <LeftSwipeItem 
              source={Images.icon_delete} 
              label='Delete' 
              size={90}
              backgroundColor={Colors.red}
              onPress={() => console.log('Delete clicked')}
            />
          ]}
          rightButtons={[
            <RightSwipeItem
              source={Images.icon_emergency}
              label='Emergency'
              size={90}
              backgroundColor={Colors.darkred}
              onPress={() => console.log('Emergency clicked')}
            />,
            <RightSwipeItem
              source={Images.icon_comment_left}
              label='Chat'
              size={90}
              backgroundColor={Colors.orange}
              onPress={() => console.log('Chat clicked')}
            />,
            <RightSwipeItem
              source={Images.icon_phone}
              label='Call'
              size={90}
              backgroundColor={Colors.green}
              onPress={() => this.setState({showDialog: true})}
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
              <Text style={styles.message}>
                CNA (L-MSS61)
              </Text>
            </View>

            <View style={styles.container2}>
            {
              this.props.fromNewGroup
              ? <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => this.setState({ isChecked: !this.state.isChecked })}
              isChecked={this.state.isChecked}
              />
              : <MaterialIcons name='chevron-right' size={30} color={'lightgray'} />
            }
            </View>

          </TouchableOpacity>
        </Swipeable>

        <CallDialog showDialog={this.state.showDialog}/>

      </TouchableOpacity>
    );
  }
}

export default ContactListItem;
