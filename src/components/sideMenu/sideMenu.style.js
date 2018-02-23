import { Colors } from "../../themes";

  export default {
    container: {
      flex: 1,
      alignItems: 'center',
        justifyContent: 'center'
    },
    profile: {
        flex: 2,
        paddingTop: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    routes: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 1.7,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    status: {
        bottom: 5, 
        right: 5,
        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'white'
    },
    name: {
        fontSize: 17,
        fontWeight: '500',
        color: Colors.default,
        paddingTop: 15
    },
    route: {
        flex: 1
    },
    seperator: {
        width: 0.7,
        flex: 1,
        margin: 8,
        backgroundColor: '#3fa0ff'
    },
    pageName: {
        fontSize: 16
    }
  };