import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChangePasswordScreenStyle'
import Images from '../Themes/Images'
import InputScrollView from '../Components/InputsScrollView'
import RoundedInput from '../Components/RoundedInput'
import Validator from 'validatorjs'

class ChangePasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: undefined,
      newPassword: undefined,
      confirmPassword: undefined
    }
  }
  validate () {
    let rules = {
      password: 'required|min:8',
      newPassword: 'required|min:8|confirmed'
    }
    let validation = new Validator({
      password: this.state.password,
      newPassword: this.state.newPassword,
      newPassword_confirmation: this.state.confirmPassword
    }, rules)
    if (validation.fails()) {
      this.setState({ errors: validation.errors })
      alert(Object.values(validation.errors.all()).join('\n'))
      return false
    }
    return true
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.backgroundInApp} style={styles.backgroundImage} resizeMode='cover' />
        <InputScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.item}>
              <RoundedInput
                style={styles.input}
                icon={Images.icUser}
                placeholder='Old Password'
                placeholderTextColor='#aaaaaa'
                styleText={styles.text}
            />
              <RoundedInput
                style={styles.input}
                icon={Images.icPassword}
                placeholder='New Password'
                placeholderTextColor='#aaaaaa'
                styleText={styles.text}
            />
              <RoundedInput
                style={styles.input}
                icon={Images.icPassword}
                placeholder='Confirm Password'
                placeholderTextColor='#aaaaaa'
                styleText={styles.text}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen)
