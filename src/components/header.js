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
          <h1>brightAR</h1>
        </div>

        <div className='instructions'>
          <p>Send visible happiness :)</p>
        </div>
      </div>
    );
  }
}
