import React from 'react';
import { Component } from 'react';
import styles from '../styles/Home.module.css';

import Header from './header.js';
import Model from './model.js';
import Message from './message.js';
import * as firebase from 'firebase';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyCblFEhn6FKGMYSaBeKLWLiojJaqxRABpI',
  authDomain: 'wics-app-8c601.firebaseapp.com',
  databaseURL: 'https://wics-app-8c601.firebaseio.com',
  projectId: 'wics-app-8c601',
  storageBucket: 'wics-app-8c601.appspot.com',
  messagingSenderId: '1042898649667',
  appId: '1:1042898649667:web:59908e029a4591ec7ccaf6',
  measurementId: 'G-5F3SMMMTJ3',
});



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
