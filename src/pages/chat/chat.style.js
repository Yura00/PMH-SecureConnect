import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative'
    },
    topBar: {
      alignItems: 'center',
      zIndex: 3,
      alignSelf: 'stretch',
      justifyContent: 'center',
      height: 50,
      backgroundColor: 'transparent'
    },
    topBarContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: 1000,
      height: 1000,
      bottom: 0,
      borderBottomRightRadius: 500,
      borderBottomLeftRadius: 500,
      zIndex: 1,
      backgroundColor: '#0f5fad'
    },
    listView: {
      flex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // paddingTop: 50,
      position: 'absolute'
    },
    sectionText: {
      top: 40,
      height: 0,
      justifyContent: 'center',
      backgroundColor: 'gray',
      paddingLeft: 10,
      fontSize: 25
    },
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    }
  });