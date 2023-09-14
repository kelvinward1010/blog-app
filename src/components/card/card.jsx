import React from 'react';
import styles from './card.module.css';
import { cate1 } from '@/images/data';
import Image from 'next/image';
import Link from 'next/link';

export function Card() {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image fill className={styles.img} src={cate1}  alt='' />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>14.09.2023 - </span>
                <span className={styles.category}>Bong Da</span>
            </div>
            <Link href={'/'}>
                <h1>Title</h1>
            </Link>
            <p className={styles.desc}>Content</p>
            <Link href={'/'} className={styles.link}>Read more</Link>
        </div>
    </div>
  )
}
