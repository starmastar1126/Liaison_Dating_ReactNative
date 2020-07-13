import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CustomMarkerStyle'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'

export default class CustomMarker extends Component {
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
  state = {
    initialRender: true
  }

  render () {
    const { coordinate, id, name, avatar } = this.props
    return (
      <MapboxGL.PointAnnotation
        id={id}
        key={id}
        title={name}
        coordinate={[coordinate.longitude, coordinate.latitude]}
        selected={this.props.selected}
        onSelected={() => this.props.onSelected(id)}
      >
        <View style={styles.container}>
          <Image
            source={Images.marker} style={styles.marker}
            resizeMode='contain'
            onLayout={() => this.setState({ initialRender: false })}
            key={this.state.initialRender}
          />
          <Image source={avatar} style={styles.avatar} resizeMode='cover' />
        </View>
        <MapboxGL.Callout title={name}>
          <TouchableOpacity onPress={() => Actions.userProfile()} style={styles.calloutContainer}>
            <Image source={Images.callout} style={styles.callout} resizeMode='contain' />
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
          </TouchableOpacity>
        </MapboxGL.Callout>
      </MapboxGL.PointAnnotation>
    )
  }
}
