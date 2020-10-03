import React, { Component } from 'react'

export default class TextMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        }
    }

    onClick = event => {

    }
    render() {
        return (
            <div className="TextMessage">
                <textarea onChange={e => this.setState({ message: e.target.value })} value={this.state.message} />
                <button onClick={this.onClick}></button>
            </div>
        )
    }
}