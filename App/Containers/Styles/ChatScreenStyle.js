import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  icon: {
    width: 19,
    height: 20,
    marginHorizontal: 13
  },
  sendButton: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    resizeMode: 'contain',
    margin: 5
  },
  addButton: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    resizeMode: 'contain',
    marginLeft: 14,
    marginVertical: 9
  },
  textInput: {
    ...Fonts.style.normal,
    fontSize: 15
  },
  container: {
    flex: 1
    // backgroundColor: Colors.lightGrey
  }

})
