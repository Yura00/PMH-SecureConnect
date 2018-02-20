import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeProvider, Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swipeable from 'react-native-swipeable'
import styles from './contactListItem.style'
import { Dialog } from 'react-native-simple-dialogs'

class ContactListItem  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
  }

  render() {
    var statusColor = 'gray'
    if (this.props.status === 'online') {
      statusColor = 'green'
    } else if (this.props.status === 'away') {
      statusColor = 'orange'
    } else if (this.props.status === 'disturb') {
      statusColor = 'darkred'
    }

    return (
      <ThemeProvider>
        <Swipeable
          leftButtonWidth={90}
          rightButtonWidth={90}
          leftButtons={[
            <TouchableOpacity style={[styles.leftSwipeItem, {backgroundColor: 'red'}]}>
              <MaterialIcons name='delete' size={30} color={'white'} style={styles.leftSwipeItemIcon} />
              <Text style={styles.leftSwipeItemText}>Delete</Text>
            </TouchableOpacity>,
          ]}
          rightButtons={[
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
              <MaterialCommunityIcons name='phone-plus' size={30} color={'white'} style={styles.rightSwipeItemIcon} />
              <Text style={styles.rightSwipeItemText}>Emergency</Text>
            </TouchableOpacity>,
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orange'}]}>
              <MaterialCommunityIcons name='video' size={30} color={'white'} style={styles.rightSwipeItemIcon} />
              <Text style={styles.rightSwipeItemText}>Chat</Text>
            </TouchableOpacity>,
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]} onPress={() => this.setState({showDialog: !this.state.showDialog})}>
              <MaterialIcons name='call' size={30} color={'white'} style={styles.rightSwipeItemIcon} />
              <Text style={styles.rightSwipeItemText}>Call</Text>
            </TouchableOpacity>
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
                <View style={{width: 36, height: 36, borderRadius: 36, backgroundColor:'lightseagreen', padding: 8, margin: 5}}>
                  <MaterialCommunityIcons name='phone-plus' size={20} color={'white'}  />
                </View>
                <Text style={{color: 'black'}}>Video</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: 36, height: 36, borderRadius: 36, backgroundColor:'orange', padding: 8, margin: 5}}>
                  <MaterialCommunityIcons name='video' size={20} color={'white'}  />
                </View>
                <Text style={{color: 'black'}}>Call</Text>
              </View>
            </View>

            <View style={{marginTop: 10, alignSelf: 'stretch', borderTopColor: 'lightgray', borderTopWidth: 1}}>
            {/* <View style={{flexDirection: 'column',flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
              <Button onPress={() => this.setState({showDialog: !this.state.showDialog})} style={{ marginTop: 10, flex: 1 }} title="Cancel" />
            {/* </View> */}
            </View>

          </Dialog>


          <View style={styles.container}>

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

          </View>
        </Swipeable>
      </ThemeProvider>
    );
  }
}

export default ContactListItem;
