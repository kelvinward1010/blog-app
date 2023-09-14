import React from 'react';
import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { cate1, cate2, cate3, cate4, cate5 } from '@/images/data';

export function Categorylist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.style}`}>
          <Image 
            src={cate1} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}
          />
          Style
        </Link>
        <Link href={'/blog?cat=news'} className={`${styles.category} ${styles.news}`}>
          <Image 
            src={cate2} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}
          />
          News
        </Link>
        <Link href={'/blog?cat=arts'} className={`${styles.category} ${styles.arts}`}>
          <Image 
            src={cate3} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}
          />
          Arts
        </Link>
        <Link href={'/blog?cat=computers'} className={`${styles.category} ${styles.computers}`}>
          <Image 
            src={cate4} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}
          />
          Computers
        </Link>
        <Link href={'/blog?cat=phone'} className={`${styles.category} ${styles.phone}`}>
          <Image 
            src={cate5} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}
          />
          Phone
        </Link>
      </div>
    </div>
  )
}
