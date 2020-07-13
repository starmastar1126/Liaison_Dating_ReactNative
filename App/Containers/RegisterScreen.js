import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import FBSDK from 'react-native-fbsdk'
import Validator from 'validatorjs'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
// import { bindActionCreators, AuthActions } from '../Redux/Actions'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterScreenStyle'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
import RoundedInput from '../Components/RoundedInput'
import RoundedButton from '../Components/RoundedButton'
import { Actions, ActionConst } from 'react-native-router-flux'
const {
  LoginManager,
  AccessToken
} = FBSDK
class RegisterScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: undefined,
      password: undefined
    }
  }
  validate () {
    let rules = {
      username: 'required|email',
      password: 'required|min:8'
    }
    let validation = new Validator({
      username: this.state.username,
      password: this.state.password
    }, rules)
    if (validation.fails()) {
      this.setState({ errors: validation.errors })
      alert(Object.values(validation.errors.all()).join('\n'))
      return false
    }
    return true
  }

  async fbLogin () {
    try {
      const result = await LoginManager.logInWithPublishPermissions()
      __DEV__ && console.log(result)
      if (!result.isCancelled) {
        const token = await AccessToken.getCurrentAccessToken()
        __DEV__ && console.log('token', token)
        alert('Login was successful with permissions: ' + result.grantedPermissions.toString())
      }
    } catch (error) {
      alert('Login failed with error: ' + error)
    }
  }
  googleLogin () {
    GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {
        // play services are available. can now configure library
        console.log('Play services success')
      })
      .catch(err => {
        console.log('Play services error', err.code, err.message)
      })
  }
  onPressRegister () {
    if (!this.validate()) {
      return false
    }
  }
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
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              placeholder='Username'
              keyboardType='email-address'
              onSubmitEditing={() => this.refs.phone.focus()}
            />
            <RoundedInput
              ref='phone'
              style={styles.input}
              icon={Images.icPhone}
              placeholder='Phone'
              keyboardType='phone-pad'
              onSubmitEditing={() => this.refs.password.focus()}
            />
            <RoundedInput
              ref='password'
              style={styles.input}
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              icon={Images.icPassword}
              placeholder='Password'
              secureTextEntry
              onSubmitEditing={() => Actions.lightbox({ type: 'reset' })}
            />

            <RoundedButton style={styles.buttonLogin} onPress={() => Actions.lightbox({ type: 'reset' })}>Sign Up</RoundedButton>

            <Text style={styles.textSignupWith}>OR SIGN IN WITH</Text>
            <View style={styles.socials}>
              <TouchableOpacity
                onPress={() => this.fbLogin()}
                style={styles.buttonSocial}>
                <Image source={Images.icFacebook} style={styles.iconSocial} resizeMode='contain' />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.googleLogin()}
                style={styles.buttonSocial}>
                <Image source={Images.icGoogle} style={styles.iconSocial} resizeMode='contain' />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonSignup} onPress={() => Actions.login({ type: ActionConst.REPLACE })}>
              <Text style={styles.textForgot}>Already have an account? Signin</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
