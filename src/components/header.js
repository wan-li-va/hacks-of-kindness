import React, { Component } from 'react';
import styles from '../styles/Header.module.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={'header'}>
        <div className={'title'}>
          <h1>Working Name</h1>
        </div>

        <div className='instructions'>
          <p>Instructions for using this web app and sending compliments</p>
        </div>
      </div>
    );
  }
}
