import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import { Logo } from '@/images/data';
import Image from 'next/image';

export function Comments() {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea 
                    placeholder='write a comment...'
                    className={styles.input}
                />
                <button className={styles.button}>Send</button>
            </div>
        ):(
            <Link href={"/login"}>Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                        className={styles.imgUser} 
                        width={50} 
                        height={50} 
                        src={Logo} 
                        alt='' 
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Kelvin Ward</span>
                        <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Fucking the post
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                        className={styles.imgUser} 
                        width={50} 
                        height={50} 
                        src={Logo} 
                        alt='' 
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Kelvin Ward</span>
                        <span className={styles.date}>15.09.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Fucking the post
                </p>
            </div>
        </div>
    </div>
  )
}
