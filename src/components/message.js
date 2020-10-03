import React, { Component } from 'react'
import TextMessage from './TextMessage'
import Recorder from './recorder'

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className={"message"}>
                <Recorder></Recorder>
                <TextMessage></TextMessage>
                <script src="https://code.responsivevoice.org/responsivevoice.js?key=B5AXjDdu"></script>
            </div>
        )
    }
}