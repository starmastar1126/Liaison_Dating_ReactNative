import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Validator from 'validatorjs'
// import { bindActionCreators, AuthActions } from '../Redux/Actions'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
import RoundedInput from '../Components/RoundedInput'
import RoundedButton from '../Components/RoundedButton'
import { Actions, ActionConst } from 'react-native-router-flux'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        username: undefined,
        password: undefined
      }
    }
  }
  onChange (newProperty) {
    const data = { ...this.state.data, ...newProperty }
    this.setState({ data })
  }
  validate () {
    let rules = {
      username: 'required|email',
      password: 'required'
    }
    let validation = new Validator(this.state.data, rules)
    if (validation.fails()) {
      this.setState({ errors: validation.errors })
      alert(Object.values(validation.errors.all()).join('\n'))
      return false
    }
    return true
  }
  onPressLogin () {
    if (!this.validate()) {
      return false
    }
    Actions.lightbox({ type: 'reset' })
  }
  render () {
    const { data } = this.state
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <InputScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Image source={Images.logo} style={styles.logo} />
            <RoundedInput
              style={styles.input}
              icon={Images.icUser}
              value={data.username}
              onChangeText={(text) => this.onChange({ username: text })}
              placeholder='Username'
              keyboardType='email-address'
              onSubmitEditing={() => this.refs.password.focus()}
              />
            <RoundedInput
              ref='password'
              style={styles.input}
              value={data.password}
              onChangeText={(text) => this.onChange({ password: text })}
              icon={Images.icPassword}
              placeholder='Password'
              secureTextEntry
              onSubmitEditing={() => Actions.lightbox({ type: 'reset' })}
            />
            <TouchableOpacity style={styles.buttonForgot} onPress={Actions.forgot}>
              <Text style={styles.textForgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <RoundedButton style={styles.buttonLogin} onPress={() => this.onPressLogin()}>Login</RoundedButton>

            <TouchableOpacity style={styles.buttonSignup} onPress={() => Actions.register({ type: ActionConst.REPLACE })}>
              <Text style={styles.textForgot}>Don't have an account? Sign Up</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
