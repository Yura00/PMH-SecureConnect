import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Image,
} from 'react-native';

import styles from './loginInput.style'

export default class LoginInput extends Component {
	render() {
		return (
			<View style={styles.inputWrapper}>
				<Image source={this.props.source}
					style={styles.inlineImg} />
				<TextInput style={styles.input}
					placeholder={this.props.placeholder}
					secureTextEntry={this.props.secureTextEntry}
					autoCorrect={this.props.autoCorrect}
					autoCapitalize={this.props.autoCapitalize}
					returnKeyType={this.props.returnKeyType}
					placeholderTextColor='lightgray'
					underlineColorAndroid='transparent' />
			</View>
		);
	}
}

LoginInput.propTypes = {
	source: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
};