import { StyleSheet } from 'react-native';
import { Colors } from '../../themes'

export default StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'white',
    borderRadius: 5
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: Colors.orange,
    padding: 8,
    margin: 5
  },
  audioButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: Colors.green,
    padding: 10,
    margin: 5
  },
  videoIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  audioIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  footer: {
    marginTop: 10,
    alignSelf: 'stretch',
    borderTopColor: 'lightgray',
    borderTopWidth: 1
  },
  cancelButton: {
    marginTop: 10,
    flex: 1
  }
});