import React from 'react';
import styles from './authlinks.module.css';
import {
    LoginOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import Link from 'next/link';
import { Space, Typography } from 'antd';
const { Text } = Typography;

export function Authlinks() {
    const status = "notauthenticated";
    return (
        <div>
            {status==="notauthenticated" ? (
                <Link href={'/login'}>
                    <LogoutOutlined className={styles.iconLogout}/>
                </Link>
            ):(
                <Space>
                    <Link href={'/write'}>
                        <Text>Write</Text>
                    </Link>
                    <Link href={'/logout'}>
                        <LoginOutlined className={styles.iconLogin}/>
                    </Link>
                </Space>
            )} 
        </div>
    )
}
