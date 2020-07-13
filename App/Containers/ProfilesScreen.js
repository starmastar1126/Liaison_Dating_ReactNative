import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, TouchableOpacity, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfilesScreenStyle'
import InputScrollView from '../Components/InputsScrollView'
import Metrics from '../Themes/Metrics'

class ProfilesScreen extends Component {
  componentDidMount () {
    setTimeout(() => {
      Actions.refresh({
        left: () => (
          <TouchableOpacity>
            <Image source={Images.icMenu} style={[styles.icon, { marginRight: 50 }]} resizeMode='contain' />
          </TouchableOpacity>
        ),
        right: () => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image source={Images.icSearch} style={[styles.icon, {marginRight: 0}]} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
            </TouchableOpacity>
          </View>
        )
      })
    }, 300)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.backgroundInApp} style={styles.backgroundImage} resizeMode='cover' />
        <FlatList
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
          extraData={this.state}
          style={{paddingHorizontal: 18}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={{marginBottom: 18, paddingTop: index === 0 ? 18 : 0}}>
                <View style={styles.item}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={Images.avatar} style={styles.avatar} resizeMode='cover' />
                    <View>
                      <Text style={styles.name}>Maurin Drake </Text>
                      <Text style={styles.message}>Los angeles, CA</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Send Request</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              </View>
            )
          }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesScreen)
