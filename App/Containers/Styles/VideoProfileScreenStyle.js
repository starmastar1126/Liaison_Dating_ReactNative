import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

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
    marginHorizontal: 22,
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    alignItems: 'center'
  },
  viewVideo: {
    borderRadius: 10,
    width: Metrics.screenWidth - 44,
    overflow: 'hidden',
    height: (Metrics.screenWidth - 44) / 16 * 9,
    alignItems: 'center',
    marginBottom: 18
  },
  imageVideo: {
    position: 'absolute',
    width: Metrics.screenWidth - 44,
    height: (Metrics.screenWidth - 44) / 16 * 9
  },
  icPlay: {
    width: 42,
    height: 42,
    marginTop: 65,
    marginBottom: 15
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: Colors.white
  },
  live: {
    ...Fonts.style.normal,
    fontSize: 9,
    color: Colors.white
  },
  direction: {
    ...Fonts.style.normal,
    fontSize: 17,
    color: '#505050',
    marginVertical: 7
  },
  info: {
    ...Fonts.style.normal,
    fontSize: 17,
    color: '#000000'
  }
})
