import { StyleSheet } from 'react-native';
const Dimensions = require('Dimensions');

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
		flex: 1,
		backgroundColor: 'white',
		height: 40,
		paddingLeft: 45,
		borderRadius: 20,
		color: 'gray',
	},
	inputWrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 20,
		height: 20,
		left: 15,
		top: 9,
		resizeMode: 'contain'
  },
});