import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 40
  },
  background: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 1800,
    height: 1800,
    bottom: 0,
    borderBottomRightRadius: 900,
    borderBottomLeftRadius: 900,
    zIndex: 1,
    backgroundColor: '#0f5fad'
  },
  paddingTop: {
    flex: 1
  },
  content: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5
  },
  drawerContainer: {
    position: 'absolute',
    left: 5,
    top: 25,
    zIndex: 10
  },
  drawerIcon: {
    resizeMode: 'contain'
  }
});