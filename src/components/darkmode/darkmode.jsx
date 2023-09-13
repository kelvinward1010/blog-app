"use client"
import React, { useContext } from 'react';
import styles from './darkmode.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function DarkMode() {

    const {toggle, mode} = useContext(ThemeContext);

    return (
        <div className={styles.darkmode} onClick={toggle}>
            <div className={styles.icon}>d</div>
            <div className={styles.icon}>l</div>
            <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right:"2px"}}/>
        </div>
    )
}
