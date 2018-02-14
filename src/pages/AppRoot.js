import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TextInput } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions'

let styles

class AppRoute extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email : '' }
  }
  
  render() {
    const {
      container,
      text,
      button,
      buttonText,
      mainContent
    } = styles
    return (
      <View style={container}>
      <TextInput
        placeholder="Type here your email!"
        onChangeText={(email) => this.setState({email})}
      />
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight style={button} onPress={() => this.props.fetchData(this.state.email)}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
      <View style={mainContent}>
      {
        this.props.appData.isFetching && <Text>Loading</Text>
      }
      <Text>{this.props.appData.message}</Text>
      </View>
    </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: (email) => dispatch(fetchData(email))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoute)