import React from 'react';
import styles from './menuposts.module.css';
import Link from 'next/link';
import { cate1, cate2, cate3, cate4, cate5 } from '@/images/data';
import Image from 'next/image';


export function Menuposts({withImage}) {
  return (
    <div className={styles.container}>
        <div className={styles.items}>
            <Link href={'/'} className={styles.item}>
               {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.img} src={cate1} fill alt='' />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.sports}`}>
                    Travel
                    </span>
                    <h3 className={styles.titlePost}>
                    Travel title
                    </h3>
                    <div className={styles.detail}>
                    <span className={styles.username}>Kelvin</span>
                    <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href={'/'} className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.img} src={cate2} fill alt='' />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.news}`}>
                    News
                    </span>
                    <h3 className={styles.titlePost}>
                    News title
                    </h3>
                    <div className={styles.detail}>
                    <span className={styles.username}>Kelvin</span>
                    <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href={'/'} className={styles.item}>
               { withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.img} src={cate3} fill alt='' />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.arts}`}>
                    Arts
                    </span>
                    <h3 className={styles.titlePost}>
                    Arts title
                    </h3>
                    <div className={styles.detail}>
                    <span className={styles.username}>Kelvin</span>
                    <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href={'/'} className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.img} src={cate4} fill alt='' />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.computers}`}>
                    Computers
                    </span>
                    <h3 className={styles.titlePost}>
                    Computers title
                    </h3>
                    <div className={styles.detail}>
                    <span className={styles.username}>Kelvin</span>
                    <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href={'/'} className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.img} src={cate5} fill alt='' />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.phone}`}>
                    Phone
                    </span>
                    <h3 className={styles.titlePost}>
                    Phone title
                    </h3>
                    <div className={styles.detail}>
                    <span className={styles.username}>Kelvin</span>
                    <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}
