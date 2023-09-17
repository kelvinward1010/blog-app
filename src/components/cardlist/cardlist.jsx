import React from 'react';
import styles from './cardlist.module.css';
import { Panigation } from '../panigation/panigation';
import Image from 'next/image';
import { Card } from '../card/card';

const getData = async (page,cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  // if (!res.ok) {
  //   throw new Error("Failed");
  // }

  return res.json();
};

export const Cardlist = async ({page, cat}) => {

  const {posts, count} = await getData(page,cat);

  const POST_PER_PAGE = 2;

  const hasPev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  console.log(posts,count)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {posts?.map((item,idx) => (
          <Card item={item} key={item?._id}/>
        ))}
      </div>
      <Panigation page={page} hasNext={hasNext} hasPev={hasPev}/>
    </div>
  )
}
