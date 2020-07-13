import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import MaterialSwitch from 'react-native-material-switch'
import styles from './Styles/SwitchStyle'

export default class Switch extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <MaterialSwitch
        inactiveButtonColor={'#ffffff'}
        inactiveButtonPressedColor={'#ffffff'}
        activeButtonColor={'#ffffff'}
        activeButtonPressedColor={'#ffffff'}
        activeBackgroundColor={'#3a79ff'}
        inactiveBackgroundColor={'#eeeeee'}
        buttonRadius={14}
        switchWidth={51}
        switchHeight={22}
        {...this.props}
      />
    )
  }
}
