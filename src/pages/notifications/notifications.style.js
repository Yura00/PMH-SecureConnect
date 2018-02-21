import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative'
    },
    listView: {
      flex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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