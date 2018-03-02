import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Badge, Avatar } from 'react-native-material-ui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Images, Colors} from '../../themes'

import styles from './searchBar.style'

class SearchBar  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChange (key) {
    this.setState({value: key})
    this.props.searchHandler && this.props.searchHandler(key)
  }

  onCancel () {
    this.setState({value: ''})
    this.props.cancelSearchHandler && this.props.cancelSearchHandler()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
				  <MaterialIcons style={styles.searchImg} name='search' size={20} color={'white'} />
          <TextInput 
            style={styles.input}
            value={this.state.value}
            placeholder={this.props.placeholder}
            selectionColor='lightgray'
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={this.props.returnKeyType}
            placeholderTextColor='lightgray'
            underlineColorAndroid='transparent'
            onChangeText={(value) => this.onChange(value)}
          />
          <TouchableOpacity onPress={()=> this.onChange('')}>
            <MaterialIcons style={styles.cancelImg} name='cancel' size={16} color={'white'} />
          </TouchableOpacity>
			  </View>
        <TouchableOpacity onPress={()=> this.onCancel()}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SearchBar.propTypes = {
  navigation: PropTypes.object
};

export default SearchBar;
