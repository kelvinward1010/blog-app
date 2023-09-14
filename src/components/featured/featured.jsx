import React from 'react';
import styles from './featured.module.css';
import { Button, Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';
import imgPost from '../../images/logo.jpg';

const { Title, Text } = Typography;
const { Meta } = Card;

export function Featured() {
  return (
    <div className={styles.container}>
      <h1>You can do everthing you want!</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={imgPost} alt='' fill />
        </div>
        <div className={styles.contentPost}>
            <h2 level={2}>Title</h2>
            <h3>Title content</h3>
            <button className={styles.button}>See more</button>
        </div>
      </div>
    </div>
  )
}
