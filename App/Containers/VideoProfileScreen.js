import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View } from 'react-native'
import { connect } from 'react-redux'
import Video from 'react-native-video'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/VideoProfileScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'

class VideoProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: true,
      skin: 'custom',
      ignoreSilentSwitch: null,
      isBuffering: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      Actions.refresh({
        right: () => (
          <TouchableOpacity>
            <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
          </TouchableOpacity>
        )
      })
    }, 300)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.backgroundInApp} style={styles.backgroundImage} resizeMode='cover' />
        <InputScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.viewVideo}>
              <Video source={require('../Videos/broadchurch.mp4')}
                style={styles.imageVideo}
                rate={this.state.rate}
                paused={this.state.paused}
                volume={this.state.volume}
                muted={this.state.muted}
                ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                resizeMode={this.state.resizeMode}
                onLoad={this.onLoad}
                onBuffer={this.onBuffer}
                onProgress={this.onProgress}
                onEnd={() => this.setState({paused: true})}
                repeat
              />
              {this.state.paused && <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => this.setState({paused: false})}
                >
                  <Image source={Images.icPlay} style={styles.icPlay} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.name}>Jonathon has a video profile</Text>
                <Text style={styles.live}>June 25, 2016 - Los angeles, CA</Text>
              </View> }
            </View>
            <Text style={styles.direction}>
              Looking for  - <Text style={styles.info}> Women</Text>
            </Text>
            <Text style={styles.direction}>
              Height  - <Text style={styles.info}> 5'9</Text>
            </Text>
            <Text style={styles.direction}>
              Language  - <Text style={styles.info}> English</Text>
            </Text>
            <Text style={styles.direction}>
              Relation  - <Text style={styles.info}> Single</Text>
            </Text>
            <Text style={[styles.direction, {marginTop: 18}]}>Jonathon wants to go for dinner at</Text>
            <Text style={styles.info}>Fork & Knives</Text>
          </View>
        </InputScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoProfileScreen)
