import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swipeable from 'react-native-swipeable'
import styles from './contactListItem.style'
import { Colors, Images } from '../../themes'
import { Dialog } from 'react-native-simple-dialogs'
import { LeftSwipeItem, RightSwipeItem, CallDialog } from '../'

class ContactListItem  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
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
      <ThemeProvider>
        <Swipeable
          leftButtonWidth={90}
          rightButtonWidth={90}
          leftButtons={[
            <LeftSwipeItem 
              source={Images.icon_delete} 
              label='Delete' 
              backgroundColor={Colors.red}
              onPress={() => console.log('Delete clicked')}
            />
          ]}
          rightButtons={[
            <RightSwipeItem 
              source={Images.icon_emergency} 
              label='Emergency' 
              backgroundColor={Colors.darkred}
              onPress={() => console.log('Emergency clicked')}
            />,
            <RightSwipeItem 
              source={Images.icon_comment_left} 
              label='Chat' 
              backgroundColor={Colors.orange}
              onPress={() => console.log('Chat clicked')}
            />,
            <RightSwipeItem 
              source={Images.icon_phone} 
              label='Call' 
              backgroundColor={Colors.green}
              onPress={() => this.setState({showDialog: true})}
            />
          ]}
          // onLeftButtonsOpenRelease={onOpen}
          // onLeftButtonsCloseRelease={onClose}
        >

        {/* <CallDialog showDialog={this.state.showDialog}/> */}

          <Dialog
            visible={this.state.showDialog}
            onTouchOutside={() => this.setState({showDialog: false})}
            contentStyle={{ justifyContent: 'center', alignItems: 'center', padding: 0, backgroundColor: 'white', borderRadius: 5 }}
            animationType="fade"
          >

            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View style={{flexDirection: 'column',flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: 36, height: 36, borderRadius: 36, backgroundColor: Colors.orange, padding: 8, margin: 5}}>
                  <Image source={Images.icon_camera} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
                </View>
                <Text style={{color: 'black'}}>Video</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: 36, height: 36, borderRadius: 36, backgroundColor:Colors.green, padding: 10, margin: 5}}>
                  <Image source={Images.icon_phone} style={{width: 16, height: 16, resizeMode: 'contain'}}/>
                </View>
                <Text style={{color: 'black'}}>Audio</Text>
              </View>
            </View>

            <View style={{marginTop: 10, alignSelf: 'stretch', borderTopColor: 'lightgray', borderTopWidth: 1}}>
              <Button onPress={() => this.setState({showDialog: !this.state.showDialog})} style={{ marginTop: 10, flex: 1 }} title="Cancel" />
            </View>

          </Dialog>


          <TouchableOpacity style={styles.container} onPress={() => this.props.onPress ? this.props.onPress() : {}}>

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
              <MaterialIcons name='chevron-right' size={30} color={'gray'} />
            </View>

          </TouchableOpacity>
        </Swipeable>
      </ThemeProvider>
    );
  }
}

export default ContactListItem;
