import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  groupContainer: {
    flexDirection: 'row',
    height: 80,
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  },
  groupUser: {
    margin: 5
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  status: {
    bottom: -2,
    right: -2,
    borderWidth: 2,
    borderColor: 'white'
  },
  removeBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  remove: {
    top: 0.5,
    right: 0.5
  },
  listView: {
    flex: 1
  },
  sectionText: {
    top: 40,
    height: 0,
    justifyContent: 'center',
    backgroundColor: 'gray',
    paddingLeft: 10,
    fontSize: 25
  },
});