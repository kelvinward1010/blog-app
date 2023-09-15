"use client"
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { Logo } from '@/images/data';
import { AppleOutlined, FacebookOutlined, LinkedinOutlined, SlackOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Link from 'next/link';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={Logo} alt='kelvinward' width={50} height={50} />
          <h1 className={styles.logoText}>Kelvin Ward</h1>
        </div>
        <p className={styles.desc}>
          I'm a developer and an youtuber
        </p>
        <Space>
            <FacebookOutlined className={styles.iconFacebook}/>
            <SlackOutlined className={styles.iconSlack}/>
            <AppleOutlined className={styles.iconApple}/>
            <LinkedinOutlined className={styles.iconLinkedIn}/>
        </Space>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={'/'}>I</Link>
          <Link href={'/'}>Love</Link>
          <Link href={'/'}>You</Link>
          <Link href={'/'}>Ok</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={'/'}>I</Link>
          <Link href={'/'}>Love</Link>
          <Link href={'/'}>You</Link>
          <Link href={'/'}>Ok</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={'/'}>I</Link>
          <Link href={'/'}>Love</Link>
          <Link href={'/'}>You</Link>
          <Link href={'/'}>Ok</Link>
        </div>
      </div>
    </div>
  )
}
