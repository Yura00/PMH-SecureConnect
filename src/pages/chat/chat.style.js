import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonTitle: {
    fontSize: 16,
    color: 'white'
  },

  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },


  container: {
    flex: 1,
    position: 'relative'
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 5,
    padding: 15
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});