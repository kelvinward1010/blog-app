"use client"
import React, { useState } from 'react';
import styles from './writepage.module.css';
import { FileImageOutlined, FolderOpenOutlined, LoadingOutlined, PlusCircleOutlined, PlusOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Space } from 'antd';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function WritePage() {

    const {data, status} = useSession();

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    if(status === "loading"){
        return(
            <LoadingOutlined />
        )
    }

    if(status === "authenticated"){
        router.push("/")
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <div className={styles.buttonmain}>
                    <button className={styles.button} onClick={() => setOpen(!open)}>
                        <PlusOutlined  className={styles.add} />
                    </button>
                    {open && (
                        <Space>
                            <button className={styles.buttonadd}>
                                <FileImageOutlined  className={styles.img} />
                            </button>
                            <button className={styles.buttonadd}>
                                <VerticalAlignTopOutlined  className={styles.img} />
                            </button>
                            <button className={styles.buttonadd}>
                                <FolderOpenOutlined  className={styles.img} />
                            </button>
                        </Space>
                    )}
                </div>
                <ReactQuill 
                    className={styles.textArea}
                    theme='bubble' 
                    value={value} 
                    onChange={setValue} 
                    placeholder='Tell your story...'
                />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    )
}
