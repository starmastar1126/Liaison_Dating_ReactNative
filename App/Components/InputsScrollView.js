import React, { Component } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from '../../node_modules/react-native-keyboard-aware-scroll-view'

class InputScrollView extends Component {
  render () {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        {...this.props}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {this.props.children}
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    )
  }
}

export default InputScrollView
