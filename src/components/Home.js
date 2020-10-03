import React from 'react';
import { Component } from 'react';
import styles from '../styles/Home.module.css';

import Header from './header.js';
import Model from './model.js';
import Message from './message.js';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header></Header>

        <div className={'body'}>
          <Model className={'model'}></Model>
          <Message className={'message'}></Message>
        </div>
      </div>
    );
  }
}
