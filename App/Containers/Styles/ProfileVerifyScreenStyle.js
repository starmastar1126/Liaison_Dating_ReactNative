import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'
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
    width: 20,
    height: 20,
    marginHorizontal: 13
  },
  container: {
    marginTop: 18,
    marginHorizontal: 13
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    // alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    borderRadius: 21,
    marginRight: 12
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4
  },
  message: {
    ...Fonts.style.normal,
    fontSize: 9,
    color: '#414141'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 43,
    borderBottomWidth: 1,
    borderColor: '#ffeeef',
    backgroundColor: '#ffffff'
  },
  iconItem: {
    height: 21,
    width: 28,
    marginRight: 16
  },
  textHeader: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#000000'
  },
  viewDirection: {
    paddingHorizontal: 14,
    paddingVertical: 15,
    backgroundColor: '#ffffff'
  },
  textName: {
    color: '#666666',
    ...Fonts.style.normal,
    fontSize: 15
  },
  textInfo: {
    color: '#666666',
    ...Fonts.style.normal,
    fontSize: 13,
    fontWeight: '300'
  }
})
