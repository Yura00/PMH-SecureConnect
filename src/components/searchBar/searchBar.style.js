import { StyleSheet } from 'react-native';
import { Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 70,
    backgroundColor: Colors.default,
    padding: 10,
    paddingTop: 30
  },
	inputWrapper: {
    flex: 1,
		flexDirection: 'row',
	},
  input: {
    flex: 1,
    backgroundColor: '#2673c0',
    height: 33,
    paddingLeft: 35,
    borderRadius: 20,
    color: 'white',
  },
	searchImg: {
		position: 'absolute',
		zIndex: 99,
		left: 7,
		top: 7,
  },
  cancelImg: {
		position: 'absolute',
		zIndex: 99,
		right: 5,
		top: 8,
  },
  cancelBtn: {
    color: 'white',
    fontSize: 13,
    paddingLeft: 10
  }
});