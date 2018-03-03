import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image
} from 'react-native';
import PropTypes from 'prop-types'

import CameraRollPicker from 'react-native-camera-roll-picker';
import FadeInView from './FadeInView'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Images } from '../../themes';

export default class CustomActions extends React.Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false,
    };
    this.onActionsPress = this.onActionsPress.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  setImages(images) {
    this._images = images;
  }

  getImages() {
    return this._images;
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible});
  }

  onActionsPress() {
    this.setModalVisible(true);
    // const options = ['Choose From Library', 'Send Location', 'Cancel'];
    // const cancelButtonIndex = options.length - 1;
    // this.context.actionSheet().showActionSheetWithOptions({
    //   options,
    //   cancelButtonIndex,
    // },
    // (buttonIndex) => {
    //   switch (buttonIndex) {
    //     case 0:
    //       this.setModalVisible(true);
    //       break;
    //     case 1:
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           this.props.onSend({
    //             location: {
    //               latitude: position.coords.latitude,
    //               longitude: position.coords.longitude,
    //             },
    //           });
    //         },
    //         (error) => alert(error.message),
    //         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    //       );
    //       break;
    //     default:
    //   }
    // });
  }

  selectImages(images) {
    this.setImages(images);
  }

  renderNavBar() {
    return (
      <NavBar style={{
        statusBar: {
          backgroundColor: '#FFF',
        },
        navBar: {
          backgroundColor: '#FFF',
        },
      }}>
        <NavButton onPress={() => {
          this.setModalVisible(false);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Cancel'}
          </NavButtonText>
        </NavButton>
        <NavTitle style={{
          color: '#000',
        }}>
          {'Camera Roll'}
        </NavTitle>
        <NavButton onPress={() => {
          this.setModalVisible(false);

          const images = this.getImages().map((image) => {
            return {
              image: image.uri,
            };
          });
          this.props.onSend(images);
          this.setImages([]);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Send'}
          </NavButtonText>
        </NavButton>
      </NavBar>
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onActionsPress}
      >
        {/* <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
          <CameraRollPicker
            maximum={10}
            imagesPerRow={4}
            callback={this.selectImages}
            selected={[]}
          />
        </Modal> */}
        <FadeInView visible={this.state.modalVisible}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={()=> this.setState({modalVisible: false})}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.dimmer} onPress={()=> this.setState({modalVisible: false})}></TouchableOpacity>
              <View style={styles.modalContent}>

                
                <View style={styles.row}>
                  <View style={styles.column}>
                    <TouchableOpacity style={[styles.modalIconContainer, { backgroundColor: Colors.icon_bg_document}]}>
                      <Image source={Images.icon_bg_document} style={styles.modalIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.modalItemText}>Document</Text>
                  </View>
                  <View style={styles.column}>
                    <TouchableOpacity style={[styles.modalIconContainer, { backgroundColor: Colors.icon_bg_camera}]}>
                      <Image source={Images.icon_bg_camera} style={styles.modalIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.modalItemText}>Camera</Text>
                  </View>
                  <View style={styles.column}>
                    <TouchableOpacity style={[styles.modalIconContainer, { backgroundColor: Colors.icon_bg_image}]}>
                      <Image source={Images.icon_bg_image} style={styles.modalIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.modalItemText}>Image</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.column}>
                    <TouchableOpacity style={[styles.modalIconContainer, { backgroundColor: Colors.icon_bg_video}]}>
                      <Image source={Images.icon_bg_video} style={styles.modalIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.modalItemText}>Video</Text>
                  </View>
                  <View style={styles.column}>
                    <TouchableOpacity style={[styles.modalIconContainer, { backgroundColor: Colors.icon_bg_audio}]}>
                      <Image source={Images.icon_bg_audio} style={styles.modalIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.modalItemText}>Audio</Text>
                  </View>
                  <View style={styles.column}>
                    <TouchableOpacity style={[styles.modalIconContainer, { backgroundColor: Colors.icon_bg_location}]}>
                      <Image source={Images.icon_bg_location} style={styles.modalIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.modalItemText}>Location</Text>
                  </View>
                </View>
              

              </View>
              <TouchableOpacity style={styles.cancelContainer} onPress={()=> this.setState({modalVisible: false})}>
                <Text style={styles.cancelBtn}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </FadeInView>

        <Image source={Images.icon_mic} style={styles.btnRecord} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 10
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: Colors.default
  },
  dimmer: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10
  },
  cancelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 40,
    margin: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  cancelBtn: {
    color: Colors.defaultblue,
    fontSize: 15,
    fontWeight: '500'
  },
  modalIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  modalItemText: {
    margin: 5,
    fontSize: 13
  },
  btnRecord: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
  onSend: () => {},
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};

CustomActions.propTypes = {
  onSend: PropTypes.func,
  options: PropTypes.object,
  icon: PropTypes.func,
  containerStyle: View.propTypes.style,
  wrapperStyle: View.propTypes.style,
  iconTextStyle: Text.propTypes.style,
}
