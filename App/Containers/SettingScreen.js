import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, TouchableOpacity, Picker } from 'react-native'
import { connect } from 'react-redux'
import ModalDropdown from 'react-native-modal-dropdown'
import Switch from '../Components/Switch'
import Icon from 'react-native-vector-icons/FontAwesome'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingScreenStyle'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
import { Actions } from 'react-native-router-flux'

class SettingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchBy: 'location'
    }
  }
  componentDidMount () {
    setTimeout(() => {
      Actions.refresh({
        right: () => (
          <TouchableOpacity>
            <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
          </TouchableOpacity>
        )
      })
    }, 300)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.backgroundInApp} style={styles.backgroundImage} resizeMode='cover' />
        <InputScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => Actions.changePassword()}
              style={styles.item}>
              <Text style={styles.text}>Change Password</Text>
              <Icon name='angle-right' size={30} color='#000000' />
            </TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.text}>Private Mode</Text>
              <Switch
                value
                onTintColor={'#3a79ff'}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Video</Text>
              <Switch
                value
                onTintColor={'#3a79ff'}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Call</Text>
              <Switch
                value
                onTintColor={'#3a79ff'}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Notifications</Text>
              <Switch
                value
                onTintColor={'#3a79ff'}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Visible in map</Text>
              <Switch
                value
                onTintColor={'#3a79ff'}
              />
            </View>
            <View style={[styles.item, {borderBottomWidth: 0}]}>
              <Text style={styles.text}>Search By</Text>
              <View style={{flexDirection: 'row'}}>
                <ModalDropdown
                  defaultValue={'Location'}
                  options={['Location']}
                  style={styles.search}
                  textStyle={styles.textSearch} />
              </View>
            </View>
          </View>
        </InputScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
