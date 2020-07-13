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
    fontWeight: '300',
    color: Colors.snow
  },
  buttonLogin: {
    marginTop: 35
  },
  textSignupWith: {
    ...Fonts.style.normal,
    fontWeight: '300',
    color: Colors.snow,
    alignSelf: 'center',
    marginTop: 30
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonSocial: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12.5
  },
  iconSocial: {
    width: 25,
    height: 25
  },
  buttonSignup: {
    marginTop: 30,
    marginBottom: 13,
    alignSelf: 'center'
  },
  textSignup: {
    ...Fonts.style.normal,
    color: Colors.snow
  }
})
