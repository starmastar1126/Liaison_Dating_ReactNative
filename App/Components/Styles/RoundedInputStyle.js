import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: Metrics.screenWidth - (Metrics.doubleBaseMargin * 2),
    borderColor: Colors.snow,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  icon: {
    width: 20,
    height: 20
  },
  input: {
    flex: 1,
    ...Fonts.style.normal,
    color: Colors.snow,
    marginLeft: Metrics.doubleBaseMargin
  }
})
