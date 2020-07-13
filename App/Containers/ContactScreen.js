import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ContactScreenStyle'
import { Images, Metrics } from '../Themes'

class ContactScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key: 'contacts', title: 'Contacts' },
        { key: 'offers', title: 'Offers' }
      ]
    }
  }

  renderContacts = () => {
    return (
      <View style={{ flex: 1 }}>
        <Image source={Images.backgroundInApp} style={styles.backgroundImage} resizeMode='cover' />
        <FlatList
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.item} onPress={() => Actions.chat()}>
                <Image source={Images.avatar} style={styles.avatar} resizeMode='cover' />
                <View>
                  <Text style={styles.name}>Abbie Pratt</Text>
                  <Text numberOfLines={1} style={[styles.message, { width: Metrics.screenWidth - 103 }]}>Lorem Ipsum is simply dummy text</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }

  renderOffers = () => {
    return (
      <View style={{ flex: 1 }}>
        <Image source={Images.backgroundInApp} style={styles.backgroundImage} resizeMode='cover' />
        <FlatList
          data={[0, 0, 1, 1, 0, 0, 0, 1, 0]}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.item} onPress={() => Actions.chat()}>
                <Image source={Images.avatar} style={styles.avatar} resizeMode='cover' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text style={styles.name}>Abbie Pratt</Text>
                    <Text
                      numberOfLines={1}
                      style={[styles.message, { width: Metrics.screenWidth - 198, marginRight: 37 }]}>
                      You get the offer for diamond a
                    </Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Image source={item === 0 ? Images.icDiamondActive : Images.icBitcoinActive} style={styles.diamond} resizeMode='contain' />
                    <Text style={[styles.message, { fontSize: 11 }]}>{item === 0 ? '5-Diamond' : '55-Bitcoin'}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>

    )
  }
  renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      activeLabelStyle={styles.activeLabel}
    />
  )
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.statusBar}>
          <TouchableOpacity
            onPress={() => this.props.handleMenu()}
          >
            <Image source={Images.icMenu} style={[styles.icon, { marginRight: 50 }]} resizeMode='contain' />
          </TouchableOpacity>
          <Text style={styles.title}>Contacts</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => Actions.map()}
            >
              <Image source={Images.icSearch} style={[styles.icon, { marginRight: 0 }]} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            contacts: this.renderContacts,
            offers: this.renderOffers
          })}
          renderTabBar={this.renderTabBar}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
            width: Metrics.screenWidth - 26,
            height: Metrics.screenHeight - Metrics.navBarHeight - 140
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen)
