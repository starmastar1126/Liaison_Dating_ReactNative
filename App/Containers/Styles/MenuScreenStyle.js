import { StyleSheet, Platform } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  menuContainer: {
    position: 'absolute',
    width: Metrics.screenWidth - 32,
    height: Metrics.screenHeight - 15,
    top: Platform.OS === 'ios' ? 32 : 12,
    left: 15
  },
  backgroundImage: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  user: {
    marginLeft: 26,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  avatar: {
    height: 88,
    width: 88,
    alignSelf: 'center',
    borderRadius: 44
  },
  viewAvatar: {
    borderRadius: 52,
    borderWidth: 6,
    borderColor: '#91b5e2',
    marginRight: 18
  },
  name: {
    ...Fonts.style.bold,
    fontSize: 18,
    color: Colors.white,
    marginBottom: 5
  },
  place: {
    ...Fonts.style.normal,
    fontSize: 13,
    color: Colors.white
  },
  itemButton: {
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 200
  },
  textItem: {
    ...Fonts.style.normal,
    fontSize: 18,
    color: Colors.white
  }
})
