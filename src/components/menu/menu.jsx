import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { cate1, cate2, cate3, cate4, cate5 } from '@/images/data';
import { Menuposts } from '../menuposts/menuposts';
import { Menucategories } from '../menucategories/menucategories';

export function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"what's hot"}</h2>
      <h1 className={styles.maintitle}>Most Popular</h1>
      <Menuposts withImage={false}/>

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.maintitle}>Categories</h1>
      <Menucategories />

      <h2 className={styles.subtitle}>Chosen by the editer</h2>
      <h1 className={styles.maintitle}>Editor Pick</h1>
      <Menuposts withImage={true} />
    </div>
  )
}
