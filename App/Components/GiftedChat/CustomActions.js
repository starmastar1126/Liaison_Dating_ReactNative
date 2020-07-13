import PropTypes from 'prop-types'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Text,
  Image
} from 'react-native'

import { Colors, Images } from '../../Themes'
import ImageCropPicker from 'react-native-image-crop-picker'
import { ConfirmDialog } from 'react-native-simple-dialogs'

export default class CustomActions extends React.Component {
  state = {
    dialogVisible: false
  }

  onPickLoation () {
    this.setState({ dialogVisible: false })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.onSend({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
      },
      (error) => __DEV__ && console.log('error', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  async onPickImagePress () {
    try {
      const image = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: false,
        compressImageMaxWidth: 720,
        compressImageMaxHeight: 720,
        loadingLabelText: 'Processing Assets'
      })
      image && this.props.onSend({ image })
    } catch (_) { }
  }

  async onOpenCameraPress () {
    try {
      const image = await ImageCropPicker.openCamera({
        multiple: false,
        compressImageMaxWidth: 720,
        compressImageMaxHeight: 720,
        loadingLabelText: 'Processing Assets'
      })
      image && this.props.onSend({ image })
    } catch (_) { }
  }

  onButtonImagePress () {
    const options = ['Open Camera', 'Open Gallery', 'Share Location', 'Cancel']
    const cancelButtonIndex = options.length - 1
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex
    }, (index) => {
      index === 0 && this.onOpenCameraPress()
      index === 1 && this.onPickImagePress()
      index === 2 && this.setState({ dialogVisible: true })
    })
  }

  render () {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={this.onButtonImagePress.bind(this)}
        >
          <Image source={Images.icAdd} style={styles.button} />
        </TouchableOpacity>
        <ConfirmDialog
          title={'LIAISON'}
          message={'Send Your Location?'}
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: 'Send',
            onPress: () => this.onPickLoation()
          }}
          negativeButton={{
            title: 'Cancel',
            onPress: () => this.setState({ dialogVisible: false })
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // width: 30,
    // height: 30,
    // marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  wrapper: {
    paddingLeft: 10
    // borderRadius: 15,
    // borderColor: Colors.primary,
    // borderWidth: 2,
    // flex: 1
  },
  button: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    resizeMode: 'contain'
    // marginLeft: 14,
    // marginVertical: 9
  },
  iconText: {
    color: '#3a79ff',
    fontWeight: 'bold',
    fontSize: 19,
    backgroundColor: 'transparent',
    textAlign: 'center'
  }
})

CustomActions.contextTypes = {
  actionSheet: PropTypes.func
}

CustomActions.defaultProps = {
  onSend: () => { },
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {}
}

CustomActions.propTypes = {
  onSend: PropTypes.func,
  options: PropTypes.object,
  icon: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  iconTextStyle: Text.propTypes.style
}
