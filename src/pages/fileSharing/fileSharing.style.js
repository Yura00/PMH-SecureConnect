import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
  text: {
    flex: 1,
    color: 'black'
  },
  bottomContainer: {
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
  },
  commentTitle: {
    marginTop: 20,
    marginBottom: 10
  },
  commentText: {
    flex: 1,
    padding: 20,
    marginBottom: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  }
});