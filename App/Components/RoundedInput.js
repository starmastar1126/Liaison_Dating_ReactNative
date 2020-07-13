import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TextInput } from 'react-native'
import styles from './Styles/RoundedInputStyle'

export default class RoundedInput extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  // static defaultProps = {
  //   style: {}
  // }

  focus = () => this.refs.input.focus()

  render () {
    return (
      <View style={[styles.container, this.props.style]}>
        {!!this.props.icon && <Image source={this.props.icon} style={styles.icon} resizeMode='contain' /> }
        <TextInput
          ref='input'
          {...this.props}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          onSubmitEditing={this.props.onSubmitEditing}
          placeholderTextColor={this.props.placeholderTextColor ? this.props.placeholderTextColor : '#cccccc'}
          style={[styles.input, this.props.styleText]}
          underlineColorAndroid='transparent'
        />
      </View>
    )
  }
}
