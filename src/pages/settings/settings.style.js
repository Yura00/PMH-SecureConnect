import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  text: {
    flex: 1,
    color: 'black'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 20
  },
  chooseContact: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  }
});