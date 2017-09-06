import React from 'react';
import { Launcher } from 'react-chat-window';
import { newChatMsg } from '../actions/ChatActions';

class Chat extends React.Component {
  //chat opens up when you click a button on another user's profile,
  // take that user's profile image and ID, pass into props
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages || [{
        author: 'me',
        type: 'text',
        data: {
          text: 'brother its been a while'
        }
      }, {
        author: 'them',
        type: 'text',
        data: {
          text: 'doggo issa been 2 long'
        },
      }],
    };
  }
  _onMessageWasSent(message) {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }
  _sendMessage(msg) {

    let sender = {
      author: 'me',
      type: 'text',
      data: { msg },
    };
    let receiver = {
      author: 'them',
      type: 'text',
      data: { msg },
      uid: this.props
    }
    newChatMsg(sender, receiver);
    //dispatch action
    //write to both locations
    //listen on one location
      //update this.state.messages with listener data
  }



  render() {
    return (
      <ChatBubble onNewMessage={this.onNewMessage} messages={this.state.messages}/>
    );
  }
}

export default Chat;