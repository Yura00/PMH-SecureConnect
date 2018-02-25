import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ViewPropTypes,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './checkbox.style'
import { Colors } from '../../themes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked,
        }
    }
    static propTypes = {
        ...(ViewPropTypes || View.PropTypes),
        leftText: PropTypes.string,
        leftTextView: PropTypes.element,
        rightText: PropTypes.string,
        leftTextStyle: PropTypes.object,
        rightTextView: PropTypes.element,
        rightTextStyle: PropTypes.object,
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool.isRequired,
        checkBoxColor: PropTypes.string,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        isChecked: false,
        leftTextStyle: {},
        rightTextStyle: {}
    }
    onClick() {
        // this.setState({
        //     isChecked: !this.state.isChecked
        // })
        this.props.onClick();
    }
    _renderLeft() {
        if (this.props.leftTextView)return this.props.leftTextView;
        if (!this.props.leftText)return null;
        return (
            <Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
        );
    }
    _renderRight() {
        if (this.props.rightTextView)return this.props.rightTextView;
        if (!this.props.rightText)return null;
        return (
            <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
        );
    }

    _renderImage() {
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : <MaterialCommunityIcons name='check-circle' size={25} color={Colors.lightblue} />;
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : <MaterialCommunityIcons name='radiobox-blank' size={25} color={'lightgray'} />;
        }
    }

    render() {
        console.log('clicked to rerender')
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={()=>this.onClick()}
                underlayColor='transparent'
                disabled={this.props.disabled}
            >
                <View style={styles.container}>
                    {/* {this._renderLeft()} */}
                    {this._renderImage()}
                    {/* {this._renderRight()} */}
                </View>
            </TouchableHighlight>
        );
    }
}
