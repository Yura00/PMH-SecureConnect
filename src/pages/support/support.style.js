import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white'
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
  text: {
    flex: 1,
    color: 'black'
  },
  mainContainer: {
    flex: 1,
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
    padding: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  footerContainer: {
    flex: 0.5,
    flexDirection: 'column',
    margin: 20
  }
});