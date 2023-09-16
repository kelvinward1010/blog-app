import React from 'react';
import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  return res.json();
};

export const Categorylist = async () => {

  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        {data?.map((item,idx) => (
          <Link href={'/blog?cat=style'} 
            className={`${styles.category} ${styles[item.slug]}`}
            key={idx}
          >
            {/* {item?.img && (
              <Image 
                src={item?.img} 
                alt='' 
                width={32} 
                height={32} 
                className={styles.image}
              />
            )} */}
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
