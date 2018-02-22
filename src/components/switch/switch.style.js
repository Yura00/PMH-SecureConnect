import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		// position: 'absolute',
		// bottom: 20,
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
		alignItems: 'center'
	},
	circle: {
		backgroundColor: 'white',
	},
	text: {
		color: 'gray',
		fontSize: 12,
		zIndex:10
	},
	paddingRight: {
		// paddingRight: 5
	},
	paddingLeft: {
		// paddingLeft: 5,
	}
  });