import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View } from 'react-native'
import { connect } from 'react-redux'
import SwitchSelector from 'react-native-switch-selector'
import Swiper from 'react-native-swiper'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PaymentScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images, Colors, Fonts } from '../Themes'
import InputScrollView from '../Components/InputsScrollView'

const options = [
  { label: 'BY BITCOIN', value: 'bitcoin' },
  { label: 'BY CARDS', value: 'cards' }
]

class PaymentScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bitcoin: props.bitcoin,
      data: [0, 0, 0]
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
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => Actions.userProfile()}>
              <Image source={Images.avatar} style={styles.avatar} resizeMode='cover' />
            </TouchableOpacity>
            <Text style={styles.textName}>Maurin Drake</Text>
            <Text style={styles.textPlace}>Los angeles, CA</Text>
            <SwitchSelector
              style={styles.switcher}
              options={options}
              initial={this.state.bitcoin ? 0 : 1}
              onPress={(value) => this.setState({ bitcoin: value === 'bitcoin' })}
              backgroundColor={Colors.transparent}
              borderColor={'#878998'}
              hasPadding={false}
              valuePadding={0}
              buttonColor={'#3979ff'}
              height={42}
              fontSize={15}
              textStyle={styles.switcherText}
              selectedTextStyle={styles.switcherSelectedText}
            />
            {this.state.bitcoin
              ? <View>
                <View style={{
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderColor: '#e2e2e2',
                  marginTop: 22,
                  height: 50,
                  backgroundColor: '#ffffff',
                  flexDirection: 'row',
                  alignItems: 'center'}}>
                  <Text style={[styles.textCheck, {color: '#7e8491'}]}>Scan</Text>
                  <Text style={[styles.textCheck, {color: '#1b96fe'}]}>Copy</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Bitcoin Address</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Date Type</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Bitcoin</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Purpose</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Priority</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}>
                  <Text style={styles.textButton}>Pay Now</Text>
                </TouchableOpacity>
              </View>
              : <View style={{marginTop: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 31}}>
                  <Text style={[styles.textCard, {color: '#7f7f7f'}]}>Your Saved Cards</Text>
                  <TouchableOpacity>
                    <Text style={[styles.textCard, {color: '#1b96fe'}]}>Add New Card</Text>
                  </TouchableOpacity>
                </View>
                <Swiper
                  style={styles.swiper}>
                  {
                    this.state.data.map((item, index) =>
                      <View
                        key={index}
                        style={styles.viewCard}>
                        <Image style={styles.cardBackground} source={Images.cardBackground} resizeMode={'contain'} />
                        <Image style={styles.card} source={Images.card} resizeMode={'contain'} />
                        <Image style={styles.logo} source={Images.visaLogo} resizeMode={'contain'} />
                        <Text style={styles.idCard}>9737  6884  7015  8564</Text>
                        <Text style={styles.nameCard}>{('PAndav kishan R').toUpperCase()}</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.nameCard, {marginLeft: 90, marginTop: 5}]}>02/17</Text>
                          <Text style={[styles.nameCard, {marginLeft: 50, marginTop: 5}]}>08/36</Text>
                        </View>
                      </View>
                    )
                  }
                </Swiper>
                <View style={[styles.viewInfo, {paddingTop: 0}]}>
                  <Text style={styles.textInfo}>Date Type</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Amount</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Purpose</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Priority</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}>
                  <Text style={styles.textButton}>Pay Now</Text>
                </TouchableOpacity>
              </View>}
          </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen)
