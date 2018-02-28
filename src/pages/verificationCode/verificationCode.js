import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { ShadowButton } from '../../components'
import Hyperlink from 'react-native-hyperlink'
import CodeInput from 'react-native-confirmation-code-input'

import { GlobalStyle, Images, Colors } from '../../themes'
import styles from './verificationCode.style'

class VerificationCode extends React.Component {
  verifyPinCode(code) {
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInput.clear()
    if (code == '1234') {
      this.props.navigation.navigate('RootDrawerNavigator')
    } else {
      Alert.alert(
        'Confirmation Code',
        'Code not match!, Test code: 1234',
        [{text: 'OK'}],
        { cancelable: false }
      );
      
      this.refs.codeInput.clear();
    }
  }

  render() {
    return (
      <View style={[GlobalStyle.pageContainer, style={ backgroundColor: Colors.default}]}>
        <View style={styles.topPadding} />
        <Text style={styles.title}> Verification Code </Text>
        <Text style={styles.description}> SMS verification code has been sent to: </Text>

        <CodeInput
          ref="codeInput"
          secureTextEntry
          className={'border-b'}
          keyboardType="numeric"
          codeLength={4}
          space={10}
          size={30}
          inputPosition='center'
          onFulfill={(code) => this.verifyPinCode(code)}
          // compareWithCode='1234'
          // onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
        />
        <View style={styles.mainContent}>
          <ShadowButton style={styles.button} label='Next' onPress={() => this.props.navigation.navigate('RootDrawerNavigator')}/>
        </View>
      </View>
    )
  }
}

export default VerificationCode
