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
    paddingTop: 22
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    // alignItems: 'center'
  },
  avatar: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    borderRadius: 45,
    marginBottom: 14
  },
  textName: {
    ...Fonts.style.normal,
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center'
  },
  textPlace: {
    ...Fonts.style.normal,
    textAlign: 'center',
    fontSize: 11,
    color: '#414141',
    marginBottom: 35
  },
  switcher: {
    borderRadius: 22,
    width: 280,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#7f8292'
  },
  switcherText: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#7e8491'
  },
  switcherSelectedText: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#ffffff'
  },
  switch: {
    marginRight: 8
  },
  textCheck: {
    flex: 1,
    textAlign: 'center',
    ...Fonts.style.normal,
    fontSize: 18
  },
  viewInfo: {
    paddingHorizontal: 13,
    paddingTop: 25,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderColor: '#e4e3e3'
  },
  textInfo: {
    ...Fonts.style.normal,
    fontSize: 16,
    color: '#333333'
  },
  button: {
    marginTop: 25,
    marginBottom: 22,
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
  },
  swiper: {
    height: (Metrics.screenWidth - 90) / 1.6464 + 60
  },
  viewCard: {
    marginTop: 15,
    height: (Metrics.screenWidth - 90) / 1.6464
  },
  textCard: {
    ...Fonts.style.normal,
    fontSize: 14
  },
  cardBackground: {
    width: Metrics.screenWidth - 27,
    alignSelf: 'center',
    position: 'absolute',
    height: (Metrics.screenWidth - 27) / 2.14935
  },
  card: {
    alignSelf: 'center',
    position: 'absolute',
    width: Metrics.screenWidth - 90,
    height: (Metrics.screenWidth - 90) / 1.6464
  },
  logo: {
    marginLeft: 63,
    marginTop: 20,
    width: 98,
    height: 37
  },
  idCard: {
    marginTop: 10,
    ...Fonts.style.bold,
    fontSize: 19,
    marginLeft: 60,
    color: '#ffffff'
  },
  nameCard: {
    ...Fonts.style.bold,
    fontSize: 12.5,
    marginLeft: 60,
    marginTop: 15,
    color: '#ffffff'
  }
})
