import React from 'react';
import io from 'socket.io-client';
import config from '../../../helpers/config';

import Messages from './Messages';
import ChatInput from './ChatInput';

require('../styles/ChatApp.css');


const divStyle = {
  height: '50vh',
  width: '100%'
};



class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);

    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    this.socket = io(config.socketport, { query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // Emit the message to the server
    console.log('messageObject', messageObject)
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container" style={divStyle}>
        <p>接线</p>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
