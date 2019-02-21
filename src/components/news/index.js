import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import config from '../../helpers/config';
import io from 'socket.io-client';

require('./news.css');



class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
        messages: [],
    }

    this.socket = io(config.newsSocketport).connect();

    this.socket.on('news', message => {
      console.log(message)
      this.addMessage(message);
    });
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.unshift(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className='message-body'>
        { this.state.messages }
      </div>

    );
  }
}



function mapStateToProps(state) {
  //console.log(state);
  return {

  };
}

const WrappedNews = Form.create()(News);

export default connect(mapStateToProps, {} )(WrappedNews);
