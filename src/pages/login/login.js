import React from 'react'
import { TouchableOpacity, KeyboardAvoidingView, View, Text, Image, TextInput, Alert, Switch } from 'react-native'
import { LoginInput, ShadowButton } from '../../components'
import Swiper from 'react-native-swiper'
import Hyperlink from 'react-native-hyperlink'
import { connect } from 'react-redux'
import { userLogin } from '../../actions'

import { GlobalStyle, Images, Colors } from '../../themes'
import styles from './login.style'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email : '', password: '' }
    this.state = {
			showPass: true,
      press: false,
      isTouchID: true
		};
		this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false ? this.setState({ showPass: false, press: true }) : this.setState({ showPass: true, press: false });
  }

  getStyledLinkText(url) {
    if (url === 'https://PMH/terms') {
      return 'Terms of Use'
    } else if (url === 'https://PMH/privacy') {
      return 'Privacy Policy'
    }
    return null
  }

  login () {
    // this.props.userLogin(this.state.username, this.state.password)
    this.state.isTouchID ? this.props.navigation.navigate('TouchID') : this.props.navigation.navigate('RootDrawerNavigator')
  }
  
  render() {
    return (
      <View style={[GlobalStyle.pageContainer, style={ backgroundColor: '#F0F0F0'}]}>
        <View style={styles.topBar}>
          <Image source={Images.bg_login} style={styles.topBackground} />
          <Image source={Images.logo} style={styles.logo} />
        </View>

        <View style={styles.mainContent}>
        <Text style={styles.title}> Welcome to Secure Connect </Text>
          <KeyboardAvoidingView behavior='padding'
            style={styles.container}>
            <LoginInput
              value={this.state.username}
              source={Images.icon_username}
              placeholder='Username'
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
              onChangeText={(username) => this.setState({username: username})}
            />
            <LoginInput
              value={this.state.password}
              source={Images.icon_password}
              secureTextEntry={this.state.showPass}
              placeholder='Password'
              returnKeyType={'done'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={(password) => this.setState({password: password})}
            />
          </KeyboardAvoidingView>
          <View style={styles.touchIdContainer}>
            <Text style={styles.textTouchID}> Setup Touch ID Login </Text>
            <Switch style={styles.switch} tintColor={Colors.default} value={ this.state.isTouchID } onValueChange={(value) => this.setState({isTouchID: value})} />
          </View>
          <ShadowButton style={styles.button} label='Log In' onPress={() => this.login()}/>
          <Hyperlink
            linkStyle={styles.hyberLinkText}
            linkText={ url => this.getStyledLinkText(url) }
            onPress={ (url, text) => alert(url + ", " + text) }
          >
            <Text style={styles.textTerms}>
              By registering. I have read and agreed to the {"\n"} https://PMH/terms and the https://PMH/privacy
            </Text>
          </Hyperlink>
        </View>
      </View>
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