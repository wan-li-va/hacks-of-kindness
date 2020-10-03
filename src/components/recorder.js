import React, { Component } from 'react'
import '../styles/Recorder.module.css'
import MicRecorder from 'mic-recorder-to-mp3'
import * as firebase from 'firebase';


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class Recorder extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true });
      }
    );
  }


  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });

        var storageRef = firebase.storage().ref();
        var newRef = storageRef.child(uuidv4());

        newRef.put(blob).then(function (snapshot) {
          console.log('Uploaded a blob or file!');
        });

        this.props.updateState('audio', newRef.fullPath);
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="recorder">
        <div className="buttons">
        <button id={'start'} onClick={this.start} disabled={this.state.isRecording}>
          Record
        </button>
        <button id={'stop'} onClick={this.stop} disabled={!this.state.isRecording}>
          Stop
        </button>
        </div>

        <audio src={this.state.blobURL} controls='controls' />
      </div>
    );
  }
}