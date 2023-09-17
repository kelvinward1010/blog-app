import React from 'react';
import styles from './blogpage.module.css';
import { Cardlist } from '@/components/cardlist/cardlist';
import { Menu } from '@/components/menu/menu';

export default function BlogPage({searchParams}) {

    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <div className={styles.content}>
                <Cardlist page={page} cat={cat}/>
                <Menu />
            </div>
        </div>
    )
}
