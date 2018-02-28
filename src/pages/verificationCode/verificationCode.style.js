
import { StyleSheet } from 'react-native'
import { Colors } from '../../themes';

export default StyleSheet.create({
  topPadding: {
    flex: 1
  },
  mainContent: {
    flex: 2,
    padding: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    fontWeight: '500'
  },
  description: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 50,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  touchIdContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  hyberLinkText: {
    color: Colors.default,
    fontSize: 13
  },
  textTerms: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 20
  }
})