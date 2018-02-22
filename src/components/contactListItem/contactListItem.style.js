import { StyleSheet } from 'react-native';
import { Colors } from '../../themes'

export default StyleSheet.create({
    container: {
      padding: 15,
      paddingLeft: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    listItem: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    status: {
        bottom: -2, 
        right: -2,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'white'
    },
    name: {
        marginLeft: 12,
        fontSize: 16
    },
    message: {
        marginLeft: 10,
        fontSize: 14,
        color: 'gray'
    },
    time: {
        top: -10,
        color: 'green'
    },
    unreadBadge: {
        top: -5
    },
    rightArrow: {
        fontSize: 30,
        padding: 10
    }
  });