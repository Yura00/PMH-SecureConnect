import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    text: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 13,
        marginTop: 10
    }
  });