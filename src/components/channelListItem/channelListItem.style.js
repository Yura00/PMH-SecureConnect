import { StyleSheet } from 'react-native';
import { Colors } from '../../themes'

export default StyleSheet.create({
    container: {
    //   flex: 1,
      padding: 7,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    listItem: {
      height: 75,
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
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
    },
    iconNewGroupContainer: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.lightblue
    },
    photo: {
      height: 25,
      width: 25,
      resizeMode: 'contain'
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
        marginLeft: 12,
        fontSize: 14,
        color: 'gray'
    },
    time: {
        top: -10,
        color: Colors.lightblue,
        fontSize: 12
    },
    unreadBadge: {
        top: -5,
        backgroundColor: Colors.lightblue
    },
    rightArrow: {
        fontSize: 30,
        padding: 10
    }
  });