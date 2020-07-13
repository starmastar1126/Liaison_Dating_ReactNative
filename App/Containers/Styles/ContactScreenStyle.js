import { StyleSheet, Platform } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

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
  statusBar: {
    height: Platform.OS === 'ios' ? 55 : 35,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  title: {
    ...Fonts.style.normal,
    fontWeight: 'normal',
    position: 'absolute',
    left: (Metrics.screenWidth / 2) - 35,
    marginHorizontal: 5
  },
  tabBar: {
    backgroundColor: Colors.white
  },
  activeLabel: {
    ...Fonts.style.normal,
    fontSize: 18,
    color: '#1b96fe'
  },
  label: {
    ...Fonts.style.normal,
    fontSize: 18,
    color: '#bfbfbf'
  },
  tab: {
    width: (Metrics.screenWidth) / 2,
    paddingBottom: 5
    // backgroundColor: 'red'
  },
  indicator: {
    height: 0
  },
  avatar: {
    height: 53,
    width: 53,
    borderRadius: 26.5,
    marginRight: 14
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 18,
    color: '#000000',
    marginBottom: 4
  },
  message: {
    ...Fonts.style.normal,
    fontSize: 13,
    color: '#7e7e7e'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 86,
    borderBottomWidth: 1,
    marginHorizontal: 18,
    borderBottomColor: '#f2eaea'
  },
  diamond: {
    height: 25,
    width: 20
  }
})
