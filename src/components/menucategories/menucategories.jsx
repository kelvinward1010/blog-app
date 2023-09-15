import React from 'react';
import styles from './menucategories.module.css';
import Link from 'next/link';

export function Menucategories() {
    return (
        <div>
            <div className={styles.categoryList}>
                <Link
                    href={"/blog?cat=sports"}
                    className={`${styles.categoryItem} ${styles.sports}`}
                >Travel</Link>
                <Link
                    href={"/blog?cat=sports"}
                    className={`${styles.categoryItem} ${styles.news}`}
                >News</Link>
                <Link
                    href={"/blog?cat=sports"}
                    className={`${styles.categoryItem} ${styles.arts}`}
                >Arts</Link>
                <Link
                    href={"/blog?cat=sports"}
                    className={`${styles.categoryItem} ${styles.computers}`}
                >Computers</Link>
                <Link
                    href={"/blog?cat=sports"}
                    className={`${styles.categoryItem} ${styles.phone}`}
                >Phone</Link>
            </div>
        </div>
    )
}
