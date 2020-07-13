import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

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
  container: {
    paddingTop: 40,
    // height: Metrics.screenHeight,
    // width: Metrics.screenWidth,
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 81,
    borderBottomWidth: 1,
    borderColor: '#ffeeef',
    backgroundColor: '#ffffff'
  },
  avatar: {
    height: 53,
    width: 53,
    borderRadius: 26.5,
    marginRight: 14
  },
  name: {
    ...Fonts.style.normal,
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4
  },
  message: {
    ...Fonts.style.normal,
    fontSize: 9,
    color: '#414141'
  },
  button: {
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#666666'
  },
  textButton: {
    ...Fonts.style.normal,
    fontSize: 10,
    paddingVertical: 11,
    paddingHorizontal: 20,
    color: '#666666'
  },
  text: {
    ...Fonts.style.normal,
    fontWeight: '300',
    fontSize: 14,
    color: '#666666',
    paddingVertical: 15,
    backgroundColor: '#ffffff'
  }
})
