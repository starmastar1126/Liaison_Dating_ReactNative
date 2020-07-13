import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: 50,
    height: 50
  },
  marker: {
    width: 50,
    height: 50,
    position: 'absolute'
  },
  avatar: {
    width: 38,
    height: 38,
    position: 'absolute',
    top: 4,
    alignSelf: 'center'
  },
  calloutContainer: {
    width: 250,
    height: 70
  },
  callout: {
    width: 250,
    height: 70,
    position: 'absolute'
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 22,
    marginLeft: 15,
    textAlign: 'center',
    width: 160,
    color: Colors.secondaryColor
  }
})
