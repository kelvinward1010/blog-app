import React from 'react';
import styles from './blogpage.module.css';
import { Cardlist } from '@/components/cardlist/cardlist';
import { Menu } from '@/components/menu/menu';

export default function BlogPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Name Blog</h1>
            <div className={styles.content}>
                <Cardlist />
                <Menu />
            </div>
        </div>
    )
}
