import { StyleSheet } from 'react-native'

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
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  name: {
    flex: 1,
    flexDirection: 'column',
  },
  padding: {
    height: 20,
    backgroundColor: '#f8f8f8',
    marginRight: -20,
    marginLeft: -20
  }
});