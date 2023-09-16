import React from 'react';
import styles from './card.module.css';
import { cate1 } from '@/images/data';
import Image from 'next/image';
import Link from 'next/link';

export function Card({key, item}) {
  return (
    <div className={styles.container} key={key}>
        {cate1 && (
            <div className={styles.imgContainer}>
                <Image fill className={styles.img} src={cate1}  alt='' />
            </div>
        )}
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>
                    {item.createdAt.substring(0, 10)} -{" "}
                </span>
                <span className={styles.category}>
                    {item.catSlug}
                </span>
            </div>
            <Link href={`/posts/${item.slug}`}>
                <h1>{item.title}</h1>
            </Link>
            <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
            <Link href={`/posts/${item.slug}`} className={styles.link}>Read more</Link>
        </div>
    </div>
  )
}
