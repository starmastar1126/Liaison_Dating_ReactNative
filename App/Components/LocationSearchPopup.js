import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/LocationSearchPopupStyle'
import Modal from 'react-native-modal'
import { Dropdown } from 'react-native-material-dropdown'
import { Images } from '../Themes'

export default class LocationSearchPopup extends Component {
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
      isVisible: false
    }
  }

  show () {
    this.setState({ isVisible: true, item: this.props.selectItem })
  }

  close () {
    this.setState({ isVisible: false })
  }

  render () {
    let data = [{
      value: 'nearByMe',
      label: 'Near-By Me'
    }]
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
            <Text style={styles.textHeader}>Search By</Text>
          </View>
          <View style={styles.description}>
            <Dropdown
              value={'nearByMe'}
              data={data}
              itemTextStyle={styles.text} />
            <View style={{alignItems: 'center'}}>
              <TextInput
                placeholder={'Search'}
                placeholderTextColor={'#999999'}
                underlineColorAndroid={'transparent'}
                style={styles.amount} />
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
