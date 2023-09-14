"use client"
import React, { useContext } from 'react';
import styles from './navbar.module.css';
import { 
    FacebookOutlined,
    SlackOutlined,
    AppleOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
import { Space, Typography } from 'antd';
import Link from 'next/link';
import { Authlinks } from '../authLinks/authlinks';
import DarkMode from '../darkmode/darkmode';
import { ThemeContext } from '@/context/ThemeContext';
import { LINKS } from '@/config/links';

const { Title, Text } = Typography;

export function Navbar() {
    const {mode} = useContext(ThemeContext);
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Space>
                    <FacebookOutlined className={styles.iconFacebook}/>
                    <SlackOutlined className={styles.iconSlack}/>
                    <AppleOutlined className={styles.iconApple}/>
                    <LinkedinOutlined className={styles.iconLinkedIn}/>
                </Space>
            </div>
            <div className={styles.logo}>
                <Title level={2} type="success">Kelvin Blog</Title>
            </div>
            <Space>
                <DarkMode />
                <div className={styles.links}>
                    <Space>
                        {LINKS.map((item,idx) => (
                            <Link href={item?.link} key={idx}>
                                <Text className={'theme'} style={mode === "light" ? {color: "black"} : {color: "white"}}>{item?.name}</Text>
                            </Link>
                        ))}
                    </Space>
                </div>
                <Authlinks />
            </Space>
        </div>
    )
}
