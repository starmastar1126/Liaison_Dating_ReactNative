import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1
  },
  backgroundImage: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  icon: {
    width: 19,
    height: 20,
    marginHorizontal: 13
  },
  container: {
    paddingTop: 42
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    // alignItems: 'center'
  },
  congrat: {
    textAlign: 'center',
    ...Fonts.style.normal,
    fontSize: 24,
    color: '#000000',
    marginBottom: 10
  },
  textMath: {
    color: '#333333',
    ...Fonts.style.normal,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 65
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#3874f5',
    marginBottom: 12
  },
  name: {
    color: '#000000',
    ...Fonts.style.normal,
    fontSize: 16
  },
  place: {
    color: '#414141',
    ...Fonts.style.normal,
    fontSize: 11
  },
  text: {
    color: '#1b96fe',
    ...Fonts.style.normal,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 55
  },
  button: {
    marginBottom: 13,
    marginHorizontal: 22,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3a79ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    ...Fonts.style.normal,
    fontSize: 18,
    color: '#ffffff'
  }
})
