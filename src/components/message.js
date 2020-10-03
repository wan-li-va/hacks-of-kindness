import React, { Component } from 'react'
import TextMessage from './TextMessage'
import Recorder from './recorder'
import styles from '../styles/Recorder.module.css';

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className={"message"}>
                <Recorder className={"recorder"}></Recorder>
                <TextMessage className={'TextMessage'}></TextMessage>
                <script src="https://code.responsivevoice.org/responsivevoice.js?key=B5AXjDdu"></script>
            </div>
        )
    }
}