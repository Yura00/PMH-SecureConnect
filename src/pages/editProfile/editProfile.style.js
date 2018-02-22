import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
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
    top: 50,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white'
  },
  avatar: {
    position: 'absolute',
    height: 100,
    width: 100,
    borderRadius: 50,
    bottom: -40
  },
  

  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAddFile: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  btnText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1.4,
    flexDirection: 'column',
    paddingTop: 60,
    margin: 20
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  itemTitle: {
    color: 'gray'
  },
  itemValue: {
    flex: 1,
    color: 'black',
    textAlign: 'right'
  },
  verifyIcon: {
    width: 16,
    height: 16,
    margin: 7
  }
});