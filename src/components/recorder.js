import React, { Component } from 'react'
import styles from '../styles/Message.module.css'

export default class Recorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className={styles.message}>
                Recorder
            </div>
        )
    }
}