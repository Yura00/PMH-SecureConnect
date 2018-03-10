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
  mainContainer: {
    flex: 1,
    width: '90%',
    flexDirection: 'column',
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
    // color: 'gray'
  },
  itemValue: {
    flex: 1,
    color: 'black',
    textAlign: 'right'
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
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    textAlignVertical: 'top'
  },
  footerContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '70%'
  }
});