import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/ChatOfferPopupStyle'
import Modal from 'react-native-modal'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
export default class ChatOfferPopup extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false,
      bitcoin: true,
      diamond: false,
      dollar: false
    }
  }

  show () {
    this.setState({ isVisible: true, item: this.props.selectItem })
  }

  close () {
    this.setState({ isVisible: false })
  }

  render () {
    const {bitcoin, diamond, dollar} = this.state
    return (
      <Modal
        isVisible={this.state.isVisible}
        style={styles.modalContainer}
        // onBackdropPress={() => this.close()}
        onBackButtonPress={() => this.close()}
        avoidKeyboard
      >
        <View style={styles.popup}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Create a offer</Text>
          </View>
          <View style={styles.description}>
            <TextInput
              placeholder={'Date description'}
              placeholderTextColor={'#999999'}
              underlineColorAndroid={'transparent'}
              style={styles.textInput}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.offer}>Offer for</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.close()
                    Actions.payment({ bitcoin: true })
                  }}>
                  <Image source={Images.icBitcoinActive} style={styles.icon} resizeMode='contain' />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({
                    bitcoin: false,
                    diamond: true,
                    dollar: false
                  })}>
                  <Image
                    source={diamond ? Images.icDiamondActive : Images.icDiamond}
                    style={styles.icon}
                    resizeMode='contain' />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.close()
                    Actions.payment({ bitcoin: false })
                  }}>
                  <Image source={Images.icDollar} style={styles.icon} resizeMode='contain' />
                </TouchableWithoutFeedback>
              </View>
              <TextInput
                placeholder={'Enter amount'}
                placeholderTextColor={'#999999'}
                underlineColorAndroid={'transparent'}
                style={styles.amount}
                keyboardType={'decimal-pad'}
              />
            </View>
            <View style={styles.viewButton}>
              <TouchableOpacity style={[styles.button, {borderColor: '#91b6e4', marginRight: 12}]}>
                <Text style={[styles.textButton, {color: '#267ac8'}]}>SEND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.close()}
                style={[styles.button, {borderColor: '#fe86a3'}]}>
                <Text style={[styles.textButton, {color: '#e22444'}]}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
