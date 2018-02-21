import { StyleSheet } from 'react-native';

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
        marginLeft: 12,
        fontSize: 14,
        color: 'gray'
    },
    time: {
        top: -10,
        color: 'green',
        fontSize: 12
    },
    unreadBadge: {
        top: -5
    },
    rightArrow: {
        fontSize: 30,
        padding: 10
    }
  });