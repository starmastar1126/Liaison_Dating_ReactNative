import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileMathScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'

class ProfileMathScreen extends Component {
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
            <Text style={styles.congrat}>Congratulation!</Text>
            <Text style={styles.textMath}>It's match!</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 50}}>
              <View style={{marginRight: 60, alignItems: 'center'}}>
                <Image source={Images.avatarMenu} style={styles.avatar} resizeMode='cover' />
                <Text style={styles.name}>Jonathon</Text>
                <Text style={styles.place}>Los angeles, CA</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={Images.avatar} style={styles.avatar} resizeMode='cover' />
                <Text style={styles.name}>Maurin Drake</Text>
                <Text style={styles.place}>Los angeles, CA</Text>
              </View>
            </View>
            <Text style={styles.text}>You and Marin Drake like to go to dinner date</Text>
            <TouchableOpacity
              onPress={() => Actions.chat()}
              style={styles.button}>
              <Text style={styles.textButton}>Send Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.map()}
              style={styles.button}>
              <Text style={styles.textButton}>Search More</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMathScreen)
