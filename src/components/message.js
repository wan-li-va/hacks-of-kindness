import React, { Component } from 'react'
import TextMessage from './TextMessage'
import Recorder from './recorder'

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      audio: '',
      entity: '',
    };
  }

  updateState(key, value) {
    let newState = {};
    newState[key] = value;
    this.setState(newState);
    console.log('UPDATED STATE');
  }
  render() {
    return (
      <div className={'message'}>
        <Recorder updateState={this.updateState.bind(this)}></Recorder>
        <TextMessage></TextMessage>
        <script src='https://code.responsivevoice.org/responsivevoice.js?key=B5AXjDdu'></script>
      </div>
    );
  }
}