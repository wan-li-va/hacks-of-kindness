import React from 'react';
import styles from '../styles/Loader.module.css';
import Loader from 'react-loaders';

export default () => {
  return (
    <div className={styles.container}>
      <Loader type='ball-rotate' />;
    </div>
  );
}
