import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Metrics } from '../../Themes'
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
    paddingTop: 40,
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    alignItems: 'center'
  },
  avatar: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    borderRadius: 90,
    marginBottom: 20
  },
  info: {
    width: Metrics.screenWidth - 80,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000000',
    paddingBottom: 35
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 28
  },
  textInfo: {
    ...Fonts.style.normal,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#000000'
  },
  asset: {
    alignItems: 'center',
    marginTop: 35,
    flexDirection: 'row'
  },
  wallet: {
    width: 45,
    height: 45,
    marginRight: 30
  },
  balance: {
    ...Fonts.style.description,
    fontWeight: '100',
    fontSize: 16
  },
  money: {
    ...Fonts.style.description,
    fontSize: 20,
    color: '#000000'
  }
})
