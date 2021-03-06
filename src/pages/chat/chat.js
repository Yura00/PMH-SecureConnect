import React, { Component } from 'react';
import { View, Text, Image, ListView, Icon, TouchableOpacity, Platform } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './chat.style'
import { Colors, Images } from '../../themes'
import data from '../mockData'

import { TopBar, PmhChat, Actions, Bubble } from '../../components/'

import CustomActions from './CustomActions';
import CustomView from './CustomView';


const n_messages = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Yes, and I use Gifted Chat!',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    sent: true,
    user: {
      _id: 1,
      name: 'Developer',
    },
    location: {
      latitude: 48.864601,
      longitude: 2.398704
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Are you building a chat app?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    received: true,
    user: {
      _id: 2,
      name: 'React Native',
    },
  },
];

const o_messages = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    sent: true,
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'React Native lets you build mobile apps using only JavaScript',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    received: true,
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
];

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (<TouchableOpacity style={styles.backButtonContainer} onPress={() => {navigation.goBack()}}>
      <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
      <Text style={styles.backButtonTitle}> {(navigation.state.params.data.name.first + ' ' + navigation.state.params.data.name.last)}</Text>
      </TouchableOpacity>)
  })
    
  constructor(props) {
    super(props);
    
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderAccessory = this.renderAccessory.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: n_messages,
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: PmhChat.prepend(previousState.messages, o_messages),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: PmhChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: PmhChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          received: true,
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        // wrapperStyle={{
        //   left: {
        //     backgroundColor: Colors.default,
        //   }
        // }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  renderAccessory(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
        // <TouchableOpacity style={styles.topButtons}>
        //   <MaterialCommunityIcons name='emoticon' size={20} color={'white'} style={styles.rightSwipeItemIcon} />
        // </TouchableOpacity>
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar>
          <TouchableOpacity style={styles.topButtons}>
            <Image source={Images.icon_user_plus} style={styles.topButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButtons}>
            <Image source={Images.icon_camera} style={styles.topButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButtons} onPress={() => this.setState({showDialog: !this.state.showDialog})}>
            <Image source={Images.icon_phone} style={styles.topButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButtons}>
            <Image source={Images.icon_bus} style={styles.topButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButtons} onPress={() => this.setState({showDialog: !this.state.showDialog})}>
            <Image source={Images.icon_book} style={styles.topButtonIcon} />
          </TouchableOpacity>
        </TopBar>

        <PmhChat
          messages={this.state.messages}
          onSend={this.onSend}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}

          user={{
            _id: 1, // sent messages should have same user._id
          }}

          renderActions={this.renderCustomActions}
          // renderBubble={this.renderBubble}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
          // renderAccessory={this.renderAccessory}
        />
        
      </View>
    );
  }
}

export default Chat;