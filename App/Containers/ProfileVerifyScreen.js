import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileVerifyScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'

class ProfileVerifyScreen extends Component {
  componentDidMount () {
    setTimeout(() => {
      Actions.refresh({
        right: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={Images.avatar} style={{marginRight: 0, width: 27, height: 27, borderRadius: 13.5}} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
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
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25}}>
              <Image source={Images.avatarMenu} style={styles.avatar} resizeMode='cover' />
              <View>
                <Text style={styles.name}>Jonathon</Text>
                <Text style={styles.message}>Member since - June 25, 2016{'\n'}Los angeles, CA</Text>
              </View>
            </View>
            <View style={{marginBottom: 18}}>
              <View style={styles.item}>
                <Image source={Images.icUserBlack} style={styles.iconItem} resizeMode='contain' />
                <Text style={[styles.textHeader]}>Identity Report</Text>
              </View>
              <View style={styles.viewDirection}>
                <View style={{flexDirection: 'row', marginBottom: 18}}>
                  <View style={{marginRight: 75}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                      <Text style={styles.textName}>Address</Text>
                      <Image source={Images.icCheck} style={{width: 15, height: 15, marginLeft: 11}} resizeMode='contain' />
                    </View>
                    <Text style={styles.textInfo}>Credit Agencies</Text>
                  </View>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                      <Text style={styles.textName}>Date of Birth</Text>
                      <Image source={Images.icCheck} style={{width: 15, height: 15, marginLeft: 11}} resizeMode='contain' />
                    </View>
                    <Text style={styles.textInfo}>Credit Agencies</Text>
                  </View>
                </View>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                    <Text style={styles.textName}>Morality</Text>
                    <Image source={Images.icUncheck} style={{width: 15, height: 15, marginLeft: 11}} resizeMode='contain' />
                  </View>
                  <Text style={styles.textInfo}>Not on Register</Text>
                </View>
              </View>
            </View>
            <View >
              <View style={styles.item}>
                <Image source={Images.icCriminal} style={styles.iconItem} resizeMode='contain' />
                <Text style={[styles.textHeader]}>Criminal History Report</Text>
              </View>
              <View style={styles.viewDirection}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 18}}>
                  <Image source={Images.icCheck} style={{width: 15, height: 15, marginRight: 16}} resizeMode='contain' />
                  <Text style={styles.textName}>Unspent Coniction</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 18}}>
                  <Image source={Images.icCheck} style={{width: 15, height: 15, marginRight: 16}} resizeMode='contain' />
                  <Text style={styles.textName}>Spent Conicton</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Images.icCheck} style={{width: 15, height: 15, marginRight: 16}} resizeMode='contain' />
                  <Text style={styles.textName}>Cautions, Warning and Remands</Text>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileVerifyScreen)
