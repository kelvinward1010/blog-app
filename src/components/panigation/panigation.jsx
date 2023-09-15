import React from 'react';
import styles from './panigation.module.css';

export function Panigation() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        Previous
      </button>
      <button className={styles.button}>
        Next
      </button>
    </div>
  )
}
