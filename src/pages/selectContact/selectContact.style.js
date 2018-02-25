import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export default StyleSheet.create({
  newGroupContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  iconNewGroupContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightblue
  },
  photo: {
    height: 25,
    width: 25
  },
  name: {
    marginLeft: 12,
    fontSize: 16
  },
  listView: {
    flex: 1,
  },
  sectionText: {
    top: 40,
    height: 0,
    justifyContent: 'center',
    backgroundColor: 'gray',
    paddingLeft: 10,
    fontSize: 25
  },
  separator: {
    flex: 1,
    marginLeft: 50,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
  actionButtonIcon: {
    width: 20,
    height: 20
  }
});