import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  ViewPropTypes,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Composer from './Composer';
import Send from './Send';
import Actions from './Actions';
import {Colors} from '../../themes';

export default class InputToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 'absolute'
    };
  }

  componentWillMount () {
    this.keyboardWillShowListener =
      Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
    this.keyboardWillHideListener =
      Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _keyboardWillShow = () => {
    this.setState({
      position: 'relative'
    });
  }

  _keyboardWillHide = () => {
    this.setState({
      position: 'absolute'
    });
  }
  
  renderActions() {
    if (this.props.renderActions) {
      return this.props.renderActions(this.props);
    } else if (this.props.onPressActionButton) {
      return <Actions {...this.props} />;
    }
    return null;
  }

  renderSend() {
    if (this.props.renderSend) {
      return this.props.renderSend(this.props);
    }
    return <Send {...this.props}/>;
  }

  renderComposer() {
    if (this.props.renderComposer) {
      return this.props.renderComposer(this.props);
    }

    return (
      <Composer
        {...this.props}
      />
    );
  }

  renderAccessory() {
    if (this.props.renderAccessory) {
      return (
        <View style={[styles.accessory, this.props.accessoryStyle]}>
          {this.props.renderAccessory(this.props)}
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View
        style={[styles.container, this.props.containerStyle, { position: this.state.position }]}>
        <View style={[styles.primary, this.props.primaryStyle]}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.emoticon}>
              <MaterialCommunityIcons name='emoticon-happy' size={22} color={'gray'} style={styles.rightSwipeItemIcon} />
            </TouchableOpacity>
            <View style={styles.border} />
            {this.renderComposer()}
            {this.renderSend()}
            {/* {this.renderActions()} */}
            <TouchableOpacity style={styles.attchment}>
              <MaterialCommunityIcons name='paperclip' size={22} color={'gray'} style={styles.rightSwipeItemIcon} />
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.record}>
            <MaterialCommunityIcons name='microphone' size={22} color={'white'} style={styles.rightSwipeItemIcon} />
          </TouchableOpacity> */}
          {this.renderActions()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 5,
    left: 5,
    right: 5,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  record: {
    borderRadius: 100,
    padding: 7,
    margin: 5,
    backgroundColor: Colors.default
  },
  border: {
    margin: 10,
    width: 1,
    height: 23,
    backgroundColor: 'gray'
  },
});

InputToolbar.defaultProps = {
  renderAccessory: null,
  renderActions: null,
  renderSend: null,
  renderComposer: null,
  containerStyle: {},
  primaryStyle: {},
  accessoryStyle: {},
};

InputToolbar.propTypes = {
  renderAccessory: PropTypes.func,
  renderActions: PropTypes.func,
  renderSend: PropTypes.func,
  renderComposer: PropTypes.func,
  onPressActionButton: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  primaryStyle: ViewPropTypes.style,
  accessoryStyle: ViewPropTypes.style,
};
