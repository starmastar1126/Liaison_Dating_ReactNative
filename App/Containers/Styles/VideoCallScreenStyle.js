import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 20,
    width: Metrics.screenWidth
  },
  button: {
    width: 64,
    height: 64
  },
  smallPhoto: {
    width: 90,
    height: 135,
    position: 'absolute',
    top: 50,
    right: 20
  }
})
