import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts } from '../../Themes/'

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
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    alignItems: 'center'
  },
  item: {
    width: Metrics.screenWidth,
    height: 73,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#f4eeee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#000000'
  },
  search: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#1d1d26'
  },
  textSearch: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#1d1d26'
  }
})
