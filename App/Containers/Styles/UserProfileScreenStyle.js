import { StyleSheet, Platform } from 'react-native'
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: 'transparent'
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
  viewVideo: {
    borderRadius: 10,
    width: Metrics.screenWidth - 36,
    overflow: 'hidden',
    height: (Metrics.screenWidth - 36) / 16 * 9,
    alignItems: 'center'
  },
  imageVideo: {
    position: 'absolute',
    width: Metrics.screenWidth - 36,
    height: (Metrics.screenWidth - 36) / 16 * 9
  },
  icPlay: {
    width: 42,
    height: 42,
    marginTop: 65,
    marginBottom: 15
  },
  imageDemo: {
    width: Metrics.screenWidth - 36,
    height: (Metrics.screenWidth - 36) * 2 / 3,
    position: 'absolute'
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white
  },
  since: {
    ...Fonts.style.normal,
    fontSize: 12,
    color: '#ccc'
  },
  iconInfo: {
    width: 17,
    height: 16,
    margin: 15
  },
  simpleInfo: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: Metrics.screenWidth - 36,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(0,0,0,0.5)'
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
    marginBottom: 17
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
    color: '#666666'
  },
  textInfo: {
    ...Fonts.style.normal,
    fontSize: 13,
    color: '#000000'
  }
})
