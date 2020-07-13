import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Switch from '../Components/Switch'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { BlurView, VibrancyView } from 'react-native-blur'
// Styles
import styles from './Styles/MyProfileScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images, Metrics } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
import MaterialSwitch from 'react-native-material-switch'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

class MyProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { viewRef: null }
  }
  componentDidMount () {
    setTimeout(() => {
      Actions.refresh({
        title: 'Jonathon',
        right: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Actions.profileVerify()}>
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
              <Image source={Images.myProfile} style={styles.imageDemo} resizeMode={'stretch'} />
              <BlurView
                style={styles.blur}
                viewRef={this.state.viewRef}
                blurType='dark'
                blurAmount={10}
              />
              <View style={styles.simpleInfo}>
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.name}>Jonathon</Text>
                  <Text style={styles.since}>Member since - June 25, 2016{'\n'}Los angeles, CA</Text>
                </View>
                <TouchableOpacity style={{ marginBottom: 20 }}>
                  <FontAwesome name='cloud-upload' size={30} color='#cccccc' />
                </TouchableOpacity>
                {/* <View style={{marginBottom: 10, flexDirection: 'row'}}>
                  <TouchableOpacity onPress={Actions.chat}>
                    <Image style={styles.iconInfo} source={Images.icChat} resizeMode={'contain'} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={Actions.videoProfile}>
                    <Image style={styles.iconInfo} source={Images.icVideo} resizeMode={'contain'} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={styles.iconInfo} source={Images.icDollarWhite} resizeMode={'contain'} />
                  </TouchableOpacity>
                </View> */}
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
                  <Image style={{ width: (Metrics.screenWidth - 133) / 3, marginHorizontal: 10 }} source={Images.myProfileThumb} resizeMode={'contain'} />
                } />
              <Image style={{ width: 24, height: 24 }} source={Images.icRight} resizeMode={'cover'} />
            </View>
            {/* <Text style={styles.textImage}>Maurin Drake has 2 private photo’s,{'\n'}Upgrade your account to request private photos.</Text> */}
            <View style={styles.viewInfo}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                  <Image style={{ width: 22, height: 22, marginRight: 20 }} source={Images.icUserBlack} resizeMode={'cover'} />
                  <Text style={styles.textAboutMe}>About Me</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.textPrivate}>Private mode</Text>
                  <Switch
                    buttonRadius={8}
                    switchWidth={24}
                    switchHeight={12}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.direction}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                <TouchableOpacity style={{ padding: 10, paddingTop: 0 }}>
                  <FontAwesome name='pencil-square-o' size={20} color='#666666' />
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Looking for</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Men</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Lifestyle expectation</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Practical</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Height</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>5'9"</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Body type</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Average</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Ethnicity</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Latin / Hispanic</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Hair color</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Black</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Eye color</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Brown</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Education</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Associates degree</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Occupation</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Atudent</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Relationship</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Single</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Children</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>0</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Smokes</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Non smoker</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }}>
                  <Text style={styles.textDirection}>Drinks</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.textInfo}>Social drinker</Text>
                    <FontAwesome name='pencil' size={12} color='#666666' />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, paddingHorizontal: 10, marginBottom: 18 }}>
                <Image style={{ width: 23, height: 15, marginRight: 20 }} source={Images.icEye} resizeMode={'cover'} />
                <Text style={styles.textAboutMe}>What i'm looking for</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.direction}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                <TouchableOpacity style={{ padding: 10, paddingTop: 0 }}>
                  <FontAwesome name='pencil-square-o' size={20} color='#666666' />
                </TouchableOpacity>
              </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileScreen)
