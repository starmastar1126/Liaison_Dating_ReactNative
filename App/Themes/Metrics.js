import {Dimensions, Platform, StatusBar} from 'react-native'
import color from 'color'
import Colors from './Colors'
import { isIphoneX } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const platform = Platform.OS
// const isIphoneX = platform === 'ios' && width === 812 && height === 375
// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: platform === 'ios' ? (isIphoneX() ? 88 : 64) : 54,
  navBarPaddingTop: platform === 'ios' ? (isIphoneX() ? 39 : 15) : 0,
  tabBarHeight: isIphoneX() ? 89 : 49,
  tabBarPaddingBottom: isIphoneX() ? 34 : 0,
  buttonRadius: 4,
  LATITUDE_DELTA: 0.0922,
  LONGITUDE_DELTA: LATITUDE_DELTA * ASPECT_RATIO,
  isIphoneX: isIphoneX(),
  platform,
  statusBarStyle: 'dark-content',
  // statusBarStyle: platform === 'ios' ? 'dark-content' : 'light-content',
  get statusBarColor () {
    return color(Colors.primaryColor)
      .darken(0.2)
      .hex()
  },
  statusBarHeight: platform === 'ios' ? 10 : StatusBar.currentHeight,
  marqueeTextDuration: platform === 'ios' ? 5000 : 8000,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
