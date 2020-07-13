import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'
import Icon from 'react-native-vector-icons/FontAwesome'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BalanceScreenStyle'

class BalanceScreen extends Component {
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
            <Image source={Images.avatar} style={styles.avatar} resizeMode='cover' />
            <View style={styles.info}>
              <Text style={styles.name}>Jonathon</Text>
              <Text style={styles.textInfo}>Member since - June 25, 2016{'\n'}Los angeles, CA</Text>
            </View>
            <View style={styles.asset}>
              <Image source={Images.icWallet} style={styles.wallet} resizeMode='cover' />
              <View>
                <Text style={styles.balance}>Balance</Text>
                <Text style={styles.money}>$125.50 / <Icon name='bitcoin' size={22} color='#000000' /> 123.50</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(BalanceScreen)
