import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarStyle: {
    backgroundColor: '#eee'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd'
  },
  title: {
    ...Fonts.style.normal,
    flex: 1,
    fontWeight: 'normal',
    textAlign: 'center',
    marginHorizontal: 5
  },
  iconBack: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    margin: 13
  },
  navbarStyle: {
    backgroundColor: Colors.white,
    borderBottomWidth: 0,
    elevation: 0
  },
  navbarTransparent: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0,
    elevation: 0
  }
})
