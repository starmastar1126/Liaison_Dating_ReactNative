import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, View, Platform } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import InputToolbar from '../Components/GiftedChat/InputToolbar'
import Send from '../Components/GiftedChat/Send'
import { GiftedChat } from '../Components/GiftedChat/GiftedChat'
import { Bubble, Composer } from 'react-native-gifted-chat'
import CustomActions from '../Components/GiftedChat/CustomActions'
// Styles
import styles from './Styles/ChatScreenStyle'
import { Actions } from 'react-native-router-flux'
import { Images, Fonts, Colors } from '../Themes'
import ChatOfferPopup from '../Components/ChatOfferPopup'

class ChatScreen extends Component {
  state = {
    messages: []
  }

  componentWillMount () {
    setTimeout(() => {
      Actions.refresh({
        title: 'James McDea',
        right: () => (
          <TouchableOpacity onPress={() => Actions.userProfile()}>
            <Image source={Images.icOption} style={styles.icon} resizeMode='contain' />
          </TouchableOpacity>
        )
      })
    }, 300)
    this.setState({
      messages: [
        {
          _id: 4,
          text: 'A forest is a large area of land covered with trees',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Anna',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 3,
          text: 'Provide ecosystem...',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Peter',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 2,
          text: 'Account for 75% of the gross primary productivity of the Earths biosphere',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Anna',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 1,
          text: 'Hello',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Peter',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    })
  }

  onSend (messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  }
  renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#ffffff',
            padding: 10
            // ...Fonts.style.description
          },
          right: {
            marginRight: 18,
            backgroundColor: '#3364c8',
            padding: 10
            // ...Fonts.style.description
          }
        }}
        textStyle={{
          left: {
            ...Fonts.style.normal,
            fontSize: 13,
            color: '#000000'
          },
          right: {
            ...Fonts.style.normal,
            fontSize: 13,
            color: '#ffffff'
          }
        }}
      />
    )
  }

  renderActions (props) {
    return (
      <CustomActions
        {...props}
      />
    )
  }

  renderSend (props) {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.onPressDonate()}
        >
          <Image source={Images.icDonate} style={styles.sendButton} />
        </TouchableOpacity>
        <Send
          {...props}
          containerStyle={{ height: 'auto' }}>
          <Image source={Images.icSend} style={styles.sendButton} />
        </Send>
      </View>
    )
  }

  renderComposer (props) {
    return (
      <Composer {...props} textInputStyle={styles.textInput} />
    )
  }

  renderInputToolbar (props) {
    return (
      <InputToolbar
        {...props}
      />
    )
  }

  // renderActions (props) {
  //   return (
  //     <TouchableOpacity
  //       style={{alignItems: 'center'}}
  //       onPress={() => Actions.payment()}
  //     >
  //       <Image source={Images.icAdd} style={styles.addButton} />
  //     </TouchableOpacity>
  //   )
  // }

  render () {
    return (
      <View style={styles.container}>
        <GiftedChat
          placeholder={'Write you Messages'}
          textInputStyle={styles.textInput}
          placeholderTextColor={'#96abbf'}
          ref={'giftChat'}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 2
          }}
          renderDay={null}
          onPressDonate={() => this.refs.chatOffer.show()}
          alwaysShowSend
          submitOnReturn
          renderAvatarOnTop
          bottomOffset={0}
          renderSend={this.renderSend}
          renderActions={this.renderActions}
          renderBubble={this.renderBubble}
          renderComposer={this.renderComposer}
          renderInputToolbar={this.renderInputToolbar}
          isAnimated
          keyboardShouldPersistTaps={'handled'}
          minInputToolbarHeight={55}
          renderTime={() => null}
      />
        <ChatOfferPopup
          ref={'chatOffer'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
