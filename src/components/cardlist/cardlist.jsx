import React from 'react';
import styles from './cardlist.module.css';
import { Panigation } from '../panigation/panigation';
import Image from 'next/image';
import { cate1 } from '@/images/data';
import { Card } from '../card/card';

export function Cardlist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />
      </div>
      <Panigation />
    </div>
  )
}
