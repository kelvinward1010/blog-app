"use client"
import React, { useContext } from 'react';
import styles from './darkmode.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export default function DarkMode() {

    const {toggle, mode} = useContext(ThemeContext);

    return (
        <div className={styles.darkmode} onClick={toggle}>
            <div className={styles.icon}><CloseOutlined /></div>
            <div className={styles.icon}><CheckOutlined /></div>
            <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right:"2px"}}/>
        </div>
    )
}
