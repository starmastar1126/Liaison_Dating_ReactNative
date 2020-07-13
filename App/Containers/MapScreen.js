import React, { Component } from 'react'
import { View, Text, Image, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
// Styles
import styles from './Styles/MapScreenStyle'
import CustomMarker from '../Components/CustomMarker'
import { Images } from '../Themes'
import LocationSearchPopup from '../Components/LocationSearchPopup'
import { Actions } from 'react-native-router-flux'

MapboxGL.setAccessToken('pk.eyJ1IjoiZHV5bHVvbmdsYyIsImEiOiJjamtjZnRtMmwwMXJ5M2tvem96aGI0cmJtIn0.7aqkX6cHna1EarRRRxmaRA')
const IS_ANDROID = Platform.OS === 'android'

class MapScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      markers: [
        {
          coordinate: {
            latitude: 37.7883,
            longitude: -122.4343
          },
          name: 'Maurin Drake',
          avatar: Images.avatar
        },
        {
          coordinate: {
            latitude: 37.7824,
            longitude: -122.4345
          },
          name: 'Maurin Drake',
          avatar: Images.avatar
        },
        {
          coordinate: {
            latitude: 37.7841,
            longitude: -122.4321
          },
          name: 'Maurin Drake',
          avatar: Images.avatar
        },
        {
          coordinate: {
            latitude: 37.7882,
            longitude: -122.4242
          },
          name: 'Maurin Drake',
          avatar: Images.avatar
        },
        {
          coordinate: {
            latitude: 37.78825,
            longitude: -122.4324
          },
          name: 'Maurin Drake',
          avatar: Images.avatar
        }
      ]
    }
  }

  async componentDidMount () {
    setTimeout(() => {
      Actions.refresh({
        left: () => (
          <TouchableOpacity>
            <Image source={Images.icMenu} style={[styles.icon, { marginRight: 50 }]} resizeMode='contain' />
          </TouchableOpacity>
        ),
        right: () => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => this.refs.locationSearch.show()}
            >
              <Image source={Images.icSearch} style={[styles.icon, { marginRight: 0 }]} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
            </TouchableOpacity>
          </View>
        )
      })
    }, 300)
    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions()
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false
      })
    }

    const position = await new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        () => resolve(null),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )
    })

    if (position && this.state) {
      this.setState({ initialPosition: position })
    }
  }

  onRegionChange = (region) => {
    this.setState({ region })
  }

  render () {
    if (IS_ANDROID && !this.state.isAndroidPermissionGranted) {
      if (this.state.isFetchingAndroidPermission) {
        return <View />
      }
      return (
        <View style={styles.matchParent}>
          <Text style={styles.noPermissionsText}>
            You need to accept location permissions in order to use this applications
          </Text>
        </View>
      )
    }

    const { region, selected } = this.state

    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.mapview}
          zoomLevel={14}
          centerCoordinate={[region.longitude, region.latitude]}
          // showUserLocation
          // userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          styleURL={MapboxGL.StyleURL.Street}
          logoEnabled={false}
          attributionEnabled={false}
          zoomEnabled
          scrollEnabled
          pitchEnabled
          compassEnabled
        >
          {this.state.markers.map((marker, index) => (
            <CustomMarker
              id={index.toString()}
              key={index.toString()}
              coordinate={marker.coordinate}
              name={marker.name}
              avatar={marker.avatar}
              onSelected={selected => this.setState({ selected })}
              selected={selected === index.toString()}
            />
          ))}
        </MapboxGL.MapView>
        <LocationSearchPopup
          ref={'locationSearch'}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
