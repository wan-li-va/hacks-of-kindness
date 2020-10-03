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
            </div>
        )
    }
}