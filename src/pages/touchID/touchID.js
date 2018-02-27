import React from 'react'
import { View, Text, Image } from 'react-native'
import { ShadowButton } from '../../components'
import Hyperlink from 'react-native-hyperlink'

import { GlobalStyle, Images, Colors } from '../../themes'
import styles from './touchID.style'

class TouchID extends React.Component {
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
      <View style={[GlobalStyle.pageContainer, style={ backgroundColor: '#F0F0F0'}]}>
        <View style={styles.topBar}>
          <Image source={Images.bg_touchID} style={styles.topBackground} />
          <Text style={styles.title}> Success </Text>
          <Text style={styles.description}> Touch ID is ready. Your print can be used {"\n"} for logging this app </Text>
          <Image source={Images.icon_finger_print} style={styles.fingerPrint} />
        </View>

        <View style={styles.mainContent}>
          <ShadowButton style={styles.button} label='Continue' onPress={() => this.props.navigation.navigate('RootDrawerNavigator')}/>
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

export default TouchID
