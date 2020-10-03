import React, { Component } from 'react'
import Button from "react-bootstrap/Button"

export default class TextMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        }
    }

    onClick = event => {
        window.responsiveVoice.speak(this.state.message)
    }

    render() {
        return (
            <div className="TextMessage">
                <textarea onChange={e => this.setState({ message: e.target.value })} value={this.state.message} />
                <Button variant="success" onClick={this.onClick}>Hear your message!</Button>
            </div>
        )
    }
}