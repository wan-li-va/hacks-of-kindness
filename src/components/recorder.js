import React, { Component } from 'react'
import styles from '../styles/Message.module.css'
// import * as React from 'react';
import AudioRecorder from 'react-audio-recorder';

export default class Recorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
          <div className={styles.message}>
            <AudioRecorder />
          </div>
        );
    }
}