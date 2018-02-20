import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Animated,
	PanResponder,
	TouchableWithoutFeedback,
	ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './switch.style'

export default class Switch extends Component {
	static propTypes = {
		onValueChange: PropTypes.func,
		activeText: PropTypes.string,
		inActiveText: PropTypes.string,
		value: PropTypes.bool,
		barHeight: PropTypes.number,
		barWidth: PropTypes.number,
	};

	static defaultProps = {
		value: false,
		onValueChange: () => null,
		activeText: 'On',
		inActiveText: 'Off',
		barHeight: null,
		barWidth: null,
	};

	constructor(props, context) {
		super(props, context);

		this.state = {
			value: props.value,
			leftLabelColor: props.value ? 'white' : '#0f5fad',
			rightLabelColor: props.value ? '#0f5fad' : 'white',
			transformSwitch: new Animated.Value(props.value ? props.barWidth / 4 : -props.barWidth / 4)
		};

		// this.handleSwitch = this.handleSwitch.bind(this);
		// this.animateSwitch = this.animateSwitch.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value === this.props.value) {
			return;
		}

		this.animateSwitch(nextProps.value, () => {
			this.setState({ value: nextProps.value });
		});
	}

	handleSwitch() {
		const { value } = this.state;
		const { onValueChange } = this.props;
		
		this.setState({
			leftLabelColor: value ? '#0f5fad' : 'white',
			rightLabelColor: !value ? '#0f5fad' : 'white',
		});

		this.animateSwitch(!value, () => {
			this.setState({ 
				value: !value,
			}, () => {
				onValueChange(this.state.value)
			});
		});
	}

	animateSwitch(value, cb = () => { }) {
		Animated.parallel([
			Animated.spring(this.state.transformSwitch, {
				toValue: value ? this.props.barWidth / 4 : -this.props.barWidth / 4
			}),
		]).start(cb);
	}

	measureLeftLabel (event) {
		this.setState({leftLabelWidth: event.nativeEvent.layout.width})
	}
	measureRightLabel (event) {
		this.setState({rightLabelWidth: event.nativeEvent.layout.width})
	}

	render() {
		const {
			transformSwitch,
			leftLabelWidth,
			rightLabelWidth,
			leftLabelColor,
			rightLabelColor
		} = this.state;

		const {
			activeText,
			inActiveText,
			activeTextStyle,
			inactiveTextStyle,
			barWidth,
			barHeight,
		} = this.props;

    	return (
			<TouchableWithoutFeedback
				onPress={() => this.handleSwitch()}
				style={styles.root}
			>
				<Animated.View
					style={[
						styles.container,
						{ 
							width: barWidth, 
							height: barHeight, 
							borderRadius: barHeight/2 
						}
					]}
				>
					<Text 
						onLayout={(event)=>this.measureLeftLabel(event)} 
						style={[
							styles.text, 
							styles.paddingRight, 
							activeTextStyle, 
							{
								color: leftLabelColor,
								marginLeft: barWidth/4-leftLabelWidth/2
							}
						]}
					>
						{activeText}
					</Text>
					<Animated.View
						style={[
							styles.animatedContainer,
							{ left: transformSwitch, width: barWidth },
						]}
					>
						<Animated.View 
							style={[
								styles.circle, 
								{ 
									width: barWidth/2, 
									height: barHeight, 
									borderRadius: barHeight / 2 
								}
							]} 
						/>
					</Animated.View>
					<Text 
						onLayout={(event)=>this.measureRightLabel(event)} 
						style={[
							styles.text, 
							styles.paddingLeft, 
							inactiveTextStyle, 
							{
								color: rightLabelColor,
								marginRight: barWidth/4-rightLabelWidth/2
							}
						]}
					>
						{inActiveText}
					</Text>
				</Animated.View>
			</TouchableWithoutFeedback>
		);
	}
}
