import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export default StyleSheet.create({
  topBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  drawerContainer: {
    position: 'absolute',
    left: 5,
    top: 25,
    zIndex: 10
  },
  titleContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    padding: 10
  },
  phone: {
    fontSize: 15,
    color: 'white'
  },
  topActionscontainer: {
    position: 'absolute',
    bottom: -5,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    padding: 8, margin: 5
  },
  actionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  mainContent: {
    flex: 1.2,
    flexDirection: 'column',
    margin: 20
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  itemTitle: {
    color: 'gray',
    fontSize: 14
  },
  itemValue: {
    flex: 1,
    color: 'black',
    textAlign: 'right'
  },
  statusContainer: {
    paddingVertical: 10,
    flexDirection: 'column',
  },
  statusSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  statusItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIcon: {
    width: 22,
    height: 22,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 5
  },
  statusText: {
    fontSize: 11,
    fontWeight: '500'
  }
});