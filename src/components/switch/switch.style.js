import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 1,
		backgroundColor: 'transparent',
	},
	animatedContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		backgroundColor: 'white'
	},
	text: {
		textAlign: 'center',
		color: 'gray',
		fontSize: 12,
		zIndex:10,
	}
});