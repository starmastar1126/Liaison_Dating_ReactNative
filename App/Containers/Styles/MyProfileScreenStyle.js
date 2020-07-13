import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../Themes/'

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
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    alignItems: 'center'
  },
  imageDemo: {
    width: Metrics.screenWidth - 36,
    height: (Metrics.screenWidth - 36) * 2 / 3,
    position: 'absolute'
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold'
  },
  since: {
    ...Fonts.style.normal,
    fontSize: 12,
    color: '#ccc'
  },
  iconInfo: {
    width: 14,
    height: 12,
    margin: 15
  },
  simpleInfo: {
    height: (Metrics.screenWidth - 36) * 2 / 3,
    width: Metrics.screenWidth - 80,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  blur: {
    bottom: 9.2,
    width: Metrics.screenWidth - 56,
    height: 58,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textImage: {
    textAlign: 'center',
    ...Fonts.style.normal,
    fontSize: 13,
    color: '#666666',
    marginBottom: 23
  },
  viewInfo: {
    width: Metrics.screenWidth - 36,
    backgroundColor: Colors.white,
    marginHorizontal: 13,
    paddingVertical: 15,
    marginBottom: 17
  },
  textAboutMe: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#000000'
  },
  textPrivate: {
    ...Fonts.style.normal,
    fontSize: 12,
    fontWeight: '300',
    color: '#000000',
    marginRight: 15
  },
  direction: {
    ...Fonts.style.normal,
    fontSize: 13,
    fontWeight: '300',
    color: '#666666',
    paddingHorizontal: 10,
    marginBottom: 17,
    flex: 1
  },
  info: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ffeeef',
    paddingHorizontal: 10
  },
  textDirection: {
    ...Fonts.style.normal,
    fontSize: 13,
    color: '#666666',
    flex: 1
  },
  textInfo: {
    ...Fonts.style.normal,
    fontSize: 13,
    color: '#000000',
    marginHorizontal: 5
  }
})
