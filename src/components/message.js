import React, { Component } from 'react'
import TextMessage from './TextMessage'

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className={"message"}>
                <TextMessage>

                </TextMessage>
                <script src="https://code.responsivevoice.org/responsivevoice.js?key=B5AXjDdu"></script>
            </div>
        )
    }
}