import React, { Component } from 'react'
import TextMessage from './TextMessage'
import Recorder from './recorder'
import styles from '../styles/Recorder.module.css';

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
    console.log('UPDATED STATE', this.state);
  }
  render() {
    return (
      <div className={'message'}>
        <Recorder className={"recorder"} updateState={this.updateState.bind(this)}></Recorder>
        <TextMessage className={'TextMessage'} updateState={this.updateState.bind(this)}></TextMessage>
        <script src='https://code.responsivevoice.org/responsivevoice.js?key=B5AXjDdu'></script>
      </div>
    );
  }
}