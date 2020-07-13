import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Switch from '../Components/Switch'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { BlurView, VibrancyView } from 'react-native-blur'
// Styles
import styles from './Styles/UserProfileScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images, Metrics } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
// import MaterialSwitch from 'react-native-material-switch'
import Video from 'react-native-video'

class UserProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewRef: null,
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
        title: 'Maurin Drake',
        right: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Actions.profileMath()}>
              <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
            </TouchableOpacity>
          </View>
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
            <View style={{ alignItems: 'center' }}>
              {/* <Image source={Images.imageDemo} style={styles.imageDemo} resizeMode={'stretch'} /> */}
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
                  onEnd={() => this.setState({ paused: true })}
                />
                {this.state.paused &&
                  <View style={styles.imageVideo}>
                    <TouchableOpacity onPress={() => this.setState({ paused: false })} style={{ alignSelf: 'center' }}>
                      <Image source={Images.icPlay} style={styles.icPlay} resizeMode='contain' />
                    </TouchableOpacity>
                    <BlurView
                      style={styles.simpleInfo}
                      viewRef={this.state.viewRef}
                      blurType='dark'
                      blurAmount={5}
                    />
                    <View style={styles.simpleInfo}>
                      <View style={{ marginHorizontal: 10 }}>
                        <Text style={styles.name}>Maurin Drake </Text>
                        <Text style={styles.since}>Member since - June 25, 2016{'\n'}Los angeles, CA</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={Actions.chat}>
                          <Image style={styles.iconInfo} source={Images.icChat} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Actions.videoCall}>
                          <Image style={styles.iconInfo} source={Images.icVideo} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Actions.payment}>
                          <Image style={styles.iconInfo} source={Images.icDollarWhite} resizeMode={'contain'} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                }
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 13, alignItems: 'center' }}>
              <Image style={{ width: 24, height: 24 }} source={Images.icLeft} resizeMode={'cover'} />
              <FlatList
                style={{ flex: 1 }}
                horizontal
                data={[0, 0, 0]}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <Image style={{ width: (Metrics.screenWidth - 133) / 3, marginHorizontal: 10 }} source={Images.imageThumb} resizeMode={'contain'} />
                } />
              <Image style={{ width: 24, height: 24 }} source={Images.icRight} resizeMode={'cover'} />
            </View>

            <Text style={styles.textImage}>Maurin Drake has 2 private photo’s,{'\n'}Upgrade your account to request private photos.</Text>

            <View style={styles.viewInfo}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ width: 22, height: 22, marginRight: 20 }} source={Images.icUserBlack} resizeMode={'cover'} />
                  <Text style={styles.textAboutMe}>About Me</Text>
                </View>
              </View>
              <Text style={styles.direction}>Lorem Ipsum is simply dummy text of the printing and{'\n'}
                typesetting industry. Lorem Ipsum has been the{'\n'}
                industry's standard dummy text ever since the 1500s.</Text>
              <View style={styles.info}>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Looking for</Text>
                  <Text style={styles.textInfo}>Men</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Lifestyle expectation</Text>
                  <Text style={styles.textInfo}>Practical</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Height</Text>
                  <Text style={styles.textInfo}>5'9"</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Body type</Text>
                  <Text style={styles.textInfo}>Average</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Ethnicity</Text>
                  <Text style={styles.textInfo}>Latin / Hispanic</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Hair color</Text>
                  <Text style={styles.textInfo}>Black</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Eye color</Text>
                  <Text style={styles.textInfo}>Brown</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Education</Text>
                  <Text style={styles.textInfo}>Associates degree</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Occupation</Text>
                  <Text style={styles.textInfo}>Atudent</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Relationship</Text>
                  <Text style={styles.textInfo}>Single</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Children</Text>
                  <Text style={styles.textInfo}>0</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Smokes</Text>
                  <Text style={styles.textInfo}>Non smoker</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Drinks</Text>
                  <Text style={styles.textInfo}>Social drinker</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, paddingHorizontal: 10, marginBottom: 18 }}>
                <Image style={{ width: 23, height: 15, marginRight: 20 }} source={Images.icEye} resizeMode={'cover'} />
                <Text style={styles.textAboutMe}>What i'm looking for</Text>
              </View>
              <Text style={[styles.direction, { marginBottom: 0 }]}>Lorem Ipsum is simply dummy text of the printing and{'\n'}
                typesetting industry. Lorem Ipsum has been the{'\n'}
                industry's standard dummy text ever since the 1500s.</Text>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)
