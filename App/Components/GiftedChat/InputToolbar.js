/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, Keyboard, ViewPropTypes } from 'react-native'

import Composer from 'react-native-gifted-chat/src/Composer'
import Send from 'react-native-gifted-chat/src/Send'
import Actions from 'react-native-gifted-chat/src/Actions'
import Color from 'react-native-gifted-chat/src/Color'

export default class InputToolbar extends React.Component {
  constructor (props) {
    super(props)

    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)

    this.state = {
      position: 'absolute',
      bottom: 0
    }
  }

  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow () {
    this.setState({
      position: 'relative',
      bottom: 10
    })
  }

  keyboardWillHide () {
    this.setState({
      position: 'absolute',
      bottom: 0
    })
  }

  renderActions () {
    if (this.props.renderActions) {
      return this.props.renderActions(this.props)
    } else if (this.props.onPressActionButton) {
      return <Actions {...this.props} />
    }
    return null
  }

  renderSend () {
    if (this.props.renderSend) {
      return this.props.renderSend(this.props)
    }
    return <Send {...this.props} />
  }

  renderComposer () {
    if (this.props.renderComposer) {
      return this.props.renderComposer(this.props)
    }

    return <Composer {...this.props} />
  }

  renderAccessory () {
    if (this.props.renderAccessory) {
      return (
        <View style={[styles.accessory, this.props.accessoryStyle]}>
          {this.props.renderAccessory(this.props)}
        </View>
      )
    }
    return null
  }

  render () {
    return (
      <View
        style={[styles.container, this.props.containerStyle, { position: this.state.position, bottom: this.state.bottom }]}
      >
        <View style={[styles.primary, this.props.primaryStyle]}>
          {this.renderActions()}
          <View style={styles.composer}>
            {this.renderComposer()}
            {this.renderSend()}
          </View>
        </View>
        {this.renderAccessory()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Color.defaultColor,
    backgroundColor: Color.white,
    bottom: 0,
    left: 0,
    right: 0
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  accessory: {
    height: '44'
  },
  composer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'flex-end',
    paddingHorizontal: 5
  }
})

InputToolbar.defaultProps = {
  renderAccessory: null,
  renderActions: null,
  renderSend: null,
  renderComposer: null,
  containerStyle: {},
  primaryStyle: {},
  accessoryStyle: {},
  onPressActionButton: () => { }
}

InputToolbar.propTypes = {
  renderAccessory: PropTypes.func,
  renderActions: PropTypes.func,
  renderSend: PropTypes.func,
  renderComposer: PropTypes.func,
  onPressActionButton: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  primaryStyle: ViewPropTypes.style,
  accessoryStyle: ViewPropTypes.style
}
