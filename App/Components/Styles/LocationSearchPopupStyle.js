import { StyleSheet, Platform } from 'react-native'
import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popup: {
    height: Platform.OS === 'ios' ? 269 : 279,
    borderRadius: 5,
    width: Metrics.screenWidth - 36,
    marginHorizontal: 18,
    backgroundColor: Colors.white,
    overflow: 'hidden'
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    height: 52,
    width: Metrics.screenWidth - 36,
    backgroundColor: '#3a79ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    ...Fonts.style.normal,
    color: Colors.white,
    fontSize: 20
  },
  description: {
    marginHorizontal: 24
  },
  text: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#999999'
  },
  amount: {
    marginTop: 25,
    borderRadius: 40,
    textAlign: 'center',
    ...Fonts.style.normal,
    fontSize: 15,
    width: Metrics.screenWidth - 146,
    paddingVertical: 13,
    borderWidth: 1,
    borderBottomColor: '#7a7a7a',
    marginBottom: 25
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    width: 81,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    ...Fonts.style.normal,
    fontSize: 11,
    paddingVertical: 11
  }
})
