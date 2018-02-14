import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TextInput } from 'react-native'
import Swiper from 'react-native-swiper'

import { connect } from 'react-redux'
import { userLogin } from '../../actions'

import styles from './login.style'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email : '', password: '' }
  }
  
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <View style={styles.container}>
            <TextInput
              placeholder="Type here your email!"
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              placeholder="Type here your password!"
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableHighlight style={styles.button} onPress={() => this.props.userLogin(this.state.email, this.state.password)}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
            <View style={styles.mainContent}>
            {
              this.props.appData.isFetching && <Text>Loading</Text>
            }
            <Text>{this.props.appData.message}</Text>
            </View>
          </View>
        </View>
      </Swiper>
    )
  }
}


function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userLogin: (email, password) => dispatch(userLogin(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)