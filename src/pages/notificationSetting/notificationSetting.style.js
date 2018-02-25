import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export default StyleSheet.create({
  text: {
    flex: 1,
    color: 'black'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  themeType: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  listItem: {
    height: 45,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  iconColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: Colors.default
  },
  name: {
    flex: 1,
    flexDirection: 'column',
  },
  padding: {
    height: 20,
    backgroundColor: '#f0f0f0',
    marginRight: -20,
    marginLeft: -20
  }
});