import React, { Component } from 'react'
import { View, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/VideoCallScreenStyle'
import { Images } from '../Themes'

class VideoCallScreen extends Component {
  render () {
    return (
      <ImageBackground source={require('../Images/video_call_demo1.png')} style={styles.container}>
        <StatusBar hidden />
        <Image source={require('../Images/video_call_demo2.png')} style={styles.smallPhoto} />
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Image source={Images.callCamera} style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.callEnd} style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.callMute} style={styles.button} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCallScreen)
