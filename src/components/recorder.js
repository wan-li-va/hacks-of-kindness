import React, { Component } from 'react'
import styles from '../styles/Message.module.css'
import MicRecorder from 'mic-recorder-to-mp3'



export default class Recorder extends Component {
    constructor(props) {
        super(props);
        const Mp3Recorder = new MicRecorder({ bitRate: 128 });
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        }
    }

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
              console.log('Permission Granted');
              this.setState({ isBlocked: false });
            },
            () => {
              console.log('Permission Denied');
              this.setState({ isBlocked: true })
            },
          );
    }

    render() {
        return (
            <div>
                <button onClick={this.start} disabled={this.state.isRecording}>
                Record
                </button>
                <button onClick={this.stop} disabled={!this.state.isRecording}>
                Stop
                </button>
                <audio src={this.state.blobURL} controls="controls" />
        </div>)
    }
}