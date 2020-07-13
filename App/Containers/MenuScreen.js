import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MenuScreenStyle'
import { OffCanvas3D } from 'react-native-off-canvas-menu'
import ContactScreen from './ContactScreen'
import { Images, Metrics } from '../Themes'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

class MenuScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      showMenu: false
    }
  }
  handleMenu () {
    const { menuOpen } = this.state
    if (menuOpen === true) {
      this.setState({
        menuOpen: false,
        showMenu: false
      })
    } else {
      this.setState({
        menuOpen: true
      })
      setTimeout(() => {
        this.setState({
          showMenu: true
        })
      }, 400)
    }
  }

  onPressItem (item) {
    this.handleMenu()
    setTimeout(() => {
      item === 'avatar' && Actions.myProfile()
      item === 'balance' && Actions.balance()
      item === 'setting' && Actions.setting()
      item === 'logout' && Actions.login({ typpe: 'reset' })
      item === 'request' && Actions.profiles()
    }, 300)
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Image source={Images.backgroundMenu} style={styles.backgroundImage} resizeMode='cover' />
        <OffCanvas3D
          active={this.state.menuOpen}
          backgroundColor={'transparent'}
          menuTextStyles={{ color: 'white' }}
          onMenuPress={this.handleMenu.bind(this)}
          handleBackPress
          menuItems={[
            {
              renderScene: <ContactScreen key='contact' handleMenu={this.handleMenu.bind(this)} />
            }
          ]}
        />

        {this.state.showMenu &&
          <TouchableWithoutFeedback onPress={this.handleMenu.bind(this)}>
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={() => this.handleMenu()}>
                <Image source={Images.icClose} style={{ width: 18, height: 18 }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressItem('avatar')}
                style={styles.user}>
                <View style={styles.viewAvatar}>
                  <View style={{ borderWidth: 2, borderColor: 'transparent' }}>
                    <Image source={Images.avatarMenu} style={styles.avatar} resizeMode='cover' />
                  </View>
                </View>
                <View>
                  <Text style={styles.name}>Jonathon</Text>
                  <Text style={styles.place}>Los angeles, CA</Text>
                </View>
              </TouchableOpacity>
              <View style={{ marginLeft: 23 }}>
                <View style={{ height: Metrics.screenHeight / 2 }}>
                  <TouchableOpacity
                    onPress={() => this.onPressItem('balance')}
                    style={styles.itemButton}>
                    <Image source={Images.icBalance} style={{ width: 18, height: 18, marginRight: 23 }} resizeMode={'contain'} />
                    <Text style={styles.textItem}>Balance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.itemButton}>
                    <Image source={Images.icNoti} style={{ width: 18, height: 18, marginRight: 23 }} resizeMode={'contain'} />
                    <Text style={styles.textItem}>Notification</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.onPressItem('request')}
                    style={styles.itemButton}>
                    <Image source={Images.icRequest} style={{ width: 18, height: 20, marginRight: 23 }} resizeMode={'contain'} />
                    <Text style={styles.textItem}>Request</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.itemButton}>
                    <Image source={Images.icHelp} style={{ width: 18, height: 18, marginRight: 23 }} resizeMode={'contain'} />
                    <Text style={styles.textItem}>Help</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.itemButton}>
                    <Image source={Images.icTerms} style={{ width: 18, height: 18, marginRight: 23 }} resizeMode={'contain'} />
                    <Text style={styles.textItem}>Terms & Condition</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: Metrics.screenWidth - 32, position: 'absolute', bottom: 35, justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.itemButton, { marginRight: 100 }]} onPress={() => this.onPressItem('setting')}>
                  <Image source={Images.icSetting} style={{ width: 18, height: 18, marginRight: 15 }} resizeMode={'contain'} />
                  <Text style={[styles.textItem, { fontSize: 14 }]}>SETTINGS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemButton} onPress={() => this.onPressItem('logout')}>
                  <Image source={Images.icLogout} style={{ width: 18, height: 18, marginRight: 15 }} resizeMode={'contain'} />
                  <Text style={[styles.textItem, { fontSize: 14 }]}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
