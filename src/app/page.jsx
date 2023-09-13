"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { Featured } from '@/components/featured/featured'
import { Categorylist } from '@/components/categorylist/categorylist'
import { Cardlist } from '@/components/cardlist/cardlist'
import { Menu } from '@/components/menu/menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Categorylist />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  )
}
