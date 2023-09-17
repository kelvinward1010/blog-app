import React from 'react';
import styles from './singlepage.module.css';
import { Menu } from '@/components/menu/menu';
import Image from 'next/image';
import { Logo } from '@/images/data';
import { Comments } from '@/components/comments/comments';

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}?popular=true`, {
        cache: "no-store",
    });

    return res.json();
};

const SinglePage = async ({ params }) => {

    const { slug } = params;

    const data = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.titlePost}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user?.image && (<div className={styles.userImageContainer}>
                            <Image src={data?.user?.image} fill alt='' className={styles.userImg} />
                        </div>)}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>15.09.2023</span>
                        </div>
                    </div>
                </div>
                {data?.img && (
                    <div className={styles.imgContainer}>
                        <Image src={data?.img} alt='' fill className={styles.img} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className={styles.comment}>
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage;