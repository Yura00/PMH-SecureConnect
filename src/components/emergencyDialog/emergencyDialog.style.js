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
  title: {
    color: Colors.default,
    fontSize: 16,
    fontWeight: '600'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 10
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500'
  },
  message: {
    width: '90%',
    height: 100,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  note: {
    width: '90%',
    margin: 5,
    textAlign: 'right',
    fontSize: 12,
    color: 'gray'
  },
  buttons: {
    flexDirection: 'row',
    margin: 10
  },
  sendButton: {
    width: 90,
    height: 35,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.default
  },
  cancelButton: {
    width: 90,
    height: 35,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  buttonText: {
    color: 'white'
  },
});