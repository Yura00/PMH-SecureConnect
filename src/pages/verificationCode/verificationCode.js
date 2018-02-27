import React from 'react'
import { View, Text, Image } from 'react-native'
import { ShadowButton } from '../../components'
import Hyperlink from 'react-native-hyperlink'

import { GlobalStyle, Images, Colors } from '../../themes'
import styles from './verificationCode.style'

class VerificationCode extends React.Component {
  getStyledLinkText(url) {
    if (url === 'https://PMH/terms') {
      return 'Terms of Use'
    } else if (url === 'https://PMH/privacy') {
      return 'Privacy Policy'
    }
    return null
  }
  render() {
    return (
      <View style={[GlobalStyle.pageContainer, style={ backgroundColor: Colors.default}]}>
        <Text style={styles.title}> Verification Code </Text>
        <Text style={styles.description}> SMS verification code has been sent to: </Text>
         
        <View style={styles.mainContent}>
          <ShadowButton style={styles.button} label='Next' onPress={() => this.props.navigation.navigate('RootDrawerNavigator')}/>
        </View>
      </View>
    )
  }
}

export default VerificationCode
