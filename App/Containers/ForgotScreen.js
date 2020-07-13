import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
// import { bindActionCreators, AuthActions } from '../Redux/Actions'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ForgotScreenStyle'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
import RoundedInput from '../Components/RoundedInput'
import RoundedButton from '../Components/RoundedButton'
import { Actions, ActionConst } from 'react-native-router-flux'

class ForgotScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <InputScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Image source={Images.logo} style={styles.logo} />
            <RoundedInput
              style={styles.input}
              icon={Images.icUser}
              placeholder='Username'
            />
            <TouchableOpacity style={styles.buttonForgot}>
              <Text style={styles.textForgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <RoundedButton style={styles.buttonLogin} onPress={() => Actions.pop()}>Send Reset Link</RoundedButton>
            <View style={styles.buttonSignup} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotScreen)
