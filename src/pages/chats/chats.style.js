import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    marginLeft: 50,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
  actionButtonIcon: {
    width: 20,
    height: 20
  }
});