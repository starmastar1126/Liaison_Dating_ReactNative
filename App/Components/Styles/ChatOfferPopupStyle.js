import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes'
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
    height: Platform.OS === 'ios' ? 341 : 371,
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
  textInput: {
    ...Fonts.style.normal,
    fontSize: 15,
    marginVertical: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7'
  },
  offer: {
    ...Fonts.style.normal,
    fontSize: 15,
    color: '#000000',
    marginBottom: 14
    // textAlign: 'center'
  },
  icon: {
    height: 27,
    width: 32,
    marginHorizontal: 10
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
    marginBottom: 30
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
