import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, AuthActions } from '../Redux/Actions'
// import { Actions } from 'react-native-router-flux'
// Styles
import styles from './Styles/LaunchScreenStyles'
import { Images } from '../Themes'
import { Actions } from '../../node_modules/react-native-router-flux'

class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isStartUp: true
    }
  }

  // static getDerivedStateFromProps (nextProps, prevState) {
  //   if (nextProps.isStarting !== prevState.isStarting) {
  //     return {
  //       isStartUp: nextProps.isStarting
  //     }
  //   }
  //   return null
  // }

  componentDidUpdate (prevProps, prevState) {
    setTimeout(() => {
      Actions.login()
    }, 1000)
    // if (this.state.isStartUp !== prevState.isStartUp) {
    // }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isStarting: state.startup.isStarting,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
