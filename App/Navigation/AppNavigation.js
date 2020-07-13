import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from 'react-native-router-flux'
import ErrorModal from '../Components/modal/ErrorModal'
import DemoLightbox from '../Components/lightbox/DemoLightbox'
import DrawerContent from '../Components/drawer/DrawerContent'
import TabIcon from '../Components/tab/TabIcon'
import styles from './Styles/NavigationStyles'
import { Colors, Images } from '../Themes'
import TabView from '../Containers/TabView'
// import EchoView from '../Containers/EchoView'
import MessageBar from '../Containers/MessageBar'

import MenuIcon from '../Images/Icons/menu_burger.png'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import BalanceScreen from '../Containers/BalanceScreen'
import ContactScreen from '../Containers/ContactScreen'
import MenuScreen from '../Containers/MenuScreen'
import SettingScreen from '../Containers/SettingScreen'
import ProfilesScreen from '../Containers/ProfilesScreen'
import VideoProfileScreen from '../Containers/VideoProfileScreen'
import MapScreen from '../Containers/MapScreen'
import ForgotScreen from '../Containers/ForgotScreen'
import ChatScreen from '../Containers/ChatScreen'
import ProfileVerifyScreen from '../Containers/ProfileVerifyScreen'
import PaymentScreen from '../Containers/PaymentScreen'
import ProfileMathScreen from '../Containers/ProfileMathScreen'
import UserProfileScreen from '../Containers/UserProfileScreen'
import MyProfileScreen from '../Containers/MyProfileScreen'
import ChangePasswordScreen from '../Containers/ChangePasswordScreen'
import VideoCallScreen from '../Containers/VideoCallScreen'

const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('ACTION:', action)
    return defaultReducer(state, action)
  }
}

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3
})
const justifyNavbar = {
  leftTitle: ' ',
  onLeft: () => null,
  rightTitle: ' ',
  onRight: () => null
}
// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://'

class AppNavigation extends Component {
  render () {
    return (
      <Router
        createReducer={reducerCreate}
        getSceneStyle={getSceneStyle}
        uriPrefix={prefix}>

        <Overlay key='overlay'>
          <Modal key='modal'
            hideNavBar
            transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
            {...justifyNavbar}
            titleStyle={styles.title}
            navigationBarStyle={styles.navbarStyle}
            renderBackButton={(props) => (
              <TouchableOpacity onPress={props.onBackLeft || Actions.pop} activeOpacity={0.7} style={styles.leftButton}>
                <Image source={Images.icBackButton} style={styles.iconBack} />
              </TouchableOpacity>
            )}
          >
            <Lightbox key='lightbox'>
              <Stack
                hideNavBar
                key='root'
              >
                <Stack
                  key='drawer'>
                  <Scene key='menu' component={MenuScreen} hideNavBar title='Menu' />
                  <Scene key='videoProfile' component={VideoProfileScreen} back title='Video Profile' />
                  <Scene key='balance' component={BalanceScreen} back title='Balance' />
                  <Scene key='payment' component={PaymentScreen} back title='Payment' />
                  <Scene key='profileMath' component={ProfileMathScreen} back title='Profile Math' />
                  <Scene key='userProfile' component={UserProfileScreen} back title='' />
                  <Scene key='myProfile' component={MyProfileScreen} back title='' />
                  <Scene key='profiles' component={ProfilesScreen} back title='Profiles' />
                  <Scene key='changePassword' component={ChangePasswordScreen} back title='ChangePassword' />
                  <Scene key='profileVerify' component={ProfileVerifyScreen} back title='Profile Verify' />
                  <Scene key='setting' component={SettingScreen} back title='Setting' />
                  <Scene key='map' component={MapScreen} back title='Search' />
                  <Scene key='chat' component={ChatScreen} back title='' />
                </Stack>
              </Stack>

              <Scene key='demo_lightbox' component={DemoLightbox} />
            </Lightbox>
            <Scene key='launchScreen' component={LaunchScreen} title='Launch' initial />
            <Scene key='login' component={LoginScreen} title='Login' />
            <Scene key='forgot'
              component={ForgotScreen}
              hideNavBar={false}
              navigationBarStyle={styles.navbarTransparent}
              back
              renderBackButton={(props) => (
                <TouchableOpacity onPress={props.onBackLeft || Actions.pop} activeOpacity={0.7} style={styles.leftButton}>
                  <Image source={Images.icBackWhite} style={styles.iconBack} />
                </TouchableOpacity>
              )}
            />
            <Scene key='register' component={RegisterScreen} title='Register' />
            <Scene key='videoCall'
              component={VideoCallScreen}
              hideNavBar={false}
              navigationBarStyle={styles.navbarTransparent}
              back
              renderBackButton={(props) => (
                <TouchableOpacity onPress={props.onBackLeft || Actions.pop} activeOpacity={0.7} style={styles.leftButton}>
                  <Image source={Images.icBackWhite} style={styles.iconBack} />
                </TouchableOpacity>
              )}
            />
            <Scene key='error' component={ErrorModal} />
          </Modal>

          <Scene component={MessageBar} />
        </Overlay>
      </Router>
    )
  }
}

export default AppNavigation
