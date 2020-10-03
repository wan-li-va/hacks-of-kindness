import React, { Component } from 'react'
import TextMessage from './TextMessage'
import Recorder from './recorder'
import styles from '../styles/Recorder.module.css';
import * as firebase from 'firebase';

function getURL() {
  var arr = window.location.href.split('/');
  delete arr[arr.length - 1];
  return arr.join('/');
}
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      audio: '',
      entity: 'd8b19562-502c-4e12-a4a3-3dc853c08211',
    };
  }

  updateState(key, value) {
    let newState = {};
    newState[key] = value;
    this.setState(newState);
    console.log('UPDATED STATE', this.state);
  }

  submitMessage() {
    var db = firebase.firestore();
    db.collection('users')
      .add(this.state)
      .then(function (docRef) {
          alert(getURL()+ 'views/' +docRef.id);
      });
  }
  render() {
    return (
      <div className={'message'}>
        <Recorder
          className={'recorder'}
          updateState={this.updateState.bind(this)}
        ></Recorder>
        <TextMessage
          className={'TextMessage'}
          updateState={this.updateState.bind(this)}
          submitMessage={this.submitMessage.bind(this)}
        ></TextMessage>
        <script src='https://code.responsivevoice.org/responsivevoice.js?key=B5AXjDdu'></script>
      </div>
    );
  }
}