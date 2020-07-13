import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  // ...ApplicationStyles.screen
  mainContainer: {
    flex: 1
  },
  backgroundImage: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  container: {
    // paddingBottom: Metrics.baseMargin
    height: Metrics.screenHeight - Metrics.statusBarHeight,
    width: Metrics.screenWidth,
    justifyContent: 'flex-end'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  input: {
    marginTop: Metrics.baseMargin,
    alignSelf: 'center'
  },
  buttonForgot: {
    alignSelf: 'flex-end',
    marginTop: Metrics.baseMargin,
    marginRight: 40
  },
  textForgot: {
    ...Fonts.style.normal,
    fontWeight: '200',
    color: Colors.snow
  },
  buttonLogin: {
    marginTop: 35
  },
  buttonSignup: {
    marginTop: 35,
    marginBottom: 13,
    alignSelf: 'center'
  },
  textSignup: {
    ...Fonts.style.normal,
    color: Colors.snow
  }
})
