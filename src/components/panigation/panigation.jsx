"use client"
import React from 'react';
import styles from './panigation.module.css';
import { useRouter } from 'next/navigation';

export function Panigation({page, hasPev, hasNext}) {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <button 
        className={styles.button}
        disabled={!hasPev}
        onClick={()=>router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button 
        className={styles.button}
        disabled={!hasNext} 
        onClick={()=>router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}
