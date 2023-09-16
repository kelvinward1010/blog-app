import styles from './page.module.css'
import { Featured } from '@/components/featured/featured'
import { Categorylist } from '@/components/categorylist/categorylist'
import { Cardlist } from '@/components/cardlist/cardlist'
import { Menu } from '@/components/menu/menu'

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <Categorylist />
      <div className={styles.content}>
        <Cardlist page={page}/>
        <Menu />
      </div>
    </div>
  )
}
