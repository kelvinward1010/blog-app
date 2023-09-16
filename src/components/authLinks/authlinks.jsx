"use client"
import React, { useContext, useEffect, useState } from 'react';
import styles from './authlinks.module.css';
import {
    CloseOutlined,
    LoginOutlined,
    LogoutOutlined,
    MenuOutlined
} from '@ant-design/icons'
import Link from 'next/link';
import { Space, Typography } from 'antd';
import { ThemeContext } from '@/context/ThemeContext';
import { LINKS } from '@/config/links';
import { signOut, useSession } from 'next-auth/react';
const { Text } = Typography;

export function Authlinks() {

    const {mode} = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const {status} = useSession();
    return (
        <div>
            {status==="unauthenticated" ? (
                <Space>
                <Link href={'/login'}>
                    <LoginOutlined className={styles.iconLogin}/>
                </Link>
            </Space>
            ):(
                <Space>
                    <Link href={'/write'}>
                        <Text>Write</Text>
                    </Link>
                    <span onClick={signOut}>
                        <LogoutOutlined className={styles.iconLogout}/>
                    </span>
                </Space>
            )} 
            {open && (
                <Space className={`${styles.auto} theme`} style={mode === "light" ? {color: "black", backgroundColor: 'white'} : {color: "white", background: '#111'}}>
                    {LINKS.map((item,idx) => (
                        <Link href={item?.link} key={idx}>
                            <Text className={`theme ${styles.link}`} style={mode === "light" ? {color: "black"} : {color: "white"}}>{item?.name}</Text>
                        </Link>
                    ))}
                    {status==="notauthenticated" ? (
                        <Link href={'/login'}>
                            <LogoutOutlined className={styles.iconLogout2}/>
                        </Link>
                    ):(
                        <Space>
                            <Link href={'/write'}>
                                <Text>Write</Text>
                            </Link>
                            <Link href={'/logout'}>
                                <LoginOutlined className={styles.iconLogin2}/>
                            </Link>
                        </Space>
                    )} 
                </Space>
            )}
            {(open === true) ? (
                <CloseOutlined className={styles.menuOutlined} onClick={()=>setOpen(!open)}/>
            ):(
                <MenuOutlined className={styles.menuOutlined} onClick={()=>setOpen(!open)}/>
            )}
        </div>
    )
}
