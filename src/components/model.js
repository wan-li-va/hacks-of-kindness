import React, { Component } from 'react'

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className={"model"}>
                <h3>Choose something to send to your friend!</h3>
            </div>
        )
    }
}