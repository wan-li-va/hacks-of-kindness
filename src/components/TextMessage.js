import React, { Component } from 'react'
import styles from '../styles/TextMessage.module.css';

export default class TextMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        }
    }

    onClick(e) {
        this.setState({ message: e.target.value });
        this.props.updateState('text', e.target.value);
    }

    render() {
        return (
            <div className="TextMessage">
                <textarea onChange={e => this.onClick(e)} value={this.state.message} />
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}