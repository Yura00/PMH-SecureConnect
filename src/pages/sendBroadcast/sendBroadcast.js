import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Button } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TopBar, ShadowButton, Switch } from '../../components/'
import { GlobalStyle, Images } from '../../themes'
import styles from './sendBroadcast.style'

class SendBroadcast extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (<TouchableOpacity style={styles.backButtonContainer} onPress={() => {navigation.goBack()}}>
      <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
      </TouchableOpacity>)
  })

  constructor(props) {
    super(props);
    this.state = {
      isAll: true
    }
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar hasContent>
          <Switch
            value={false}
            onValueChange={(val) => this.setState({isAll: val})}
            activeText={'All'}
            inActiveText={'Channels'}
            barWidth={160}
            barHeight={25}
          />
        </TopBar>
        <View style={styles.mainContainer}>
          {this.state.isAll && <TouchableOpacity style={styles.chooseChannel}>
            <Text style={styles.text}> Select Channel Name </Text>
          </TouchableOpacity>
          }
          <TextInput
            style={styles.commentText}
            multiline
            underlineColorAndroid='transparent'
            placeholder='Your message here...'
          />
          <View style={styles.buttonContainer}>
            <ShadowButton style={styles.button} label='Send' />
          </View>
        </View>
      </View>
    );
  }
}

export default SendBroadcast
