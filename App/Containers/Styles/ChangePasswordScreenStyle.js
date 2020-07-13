import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Metrics from '../../Themes/Metrics'

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
    paddingTop: 40,
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#ffffff',
    marginHorizontal: 13,
    paddingBottom: 8
  },
  input: {
    marginTop: Metrics.baseMargin,
    alignSelf: 'center',
    borderColor: 'transparent'
  },
  text: {
    color: '#000000'
  }
})
