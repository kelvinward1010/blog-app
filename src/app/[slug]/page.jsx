import React from 'react';
import styles from './singlepage.module.css';
import { Menu } from '@/components/menu/menu';
import Image from 'next/image';
import { Logo } from '@/images/data';
import { Comments } from '@/components/comments/comments';

export default function SinglePage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.titlePost}>Title Post</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src={Logo} fill alt='' className={styles.userImg} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Kelvin Ward</span>
                        <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={Logo} alt='' fill className={styles.img}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.desc}>
                    <p className={styles.cntDesc}>
                        Everything you find here has been specially created by 
                        the British Council, the world's English teaching experts.
                    </p>
                    <h2>Title fucking</h2>
                    <p className={styles.cntDesc}>
                        Everything you find here has been specially created by 
                        the British Council, the world's English teaching experts.
                    </p>
                    <p className={styles.cntDesc}>
                        Everything you find here has been specially created by 
                        the British Council, the world's English teaching experts.
                    </p>
                </div>
                <div className={styles.comment}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}
