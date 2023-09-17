"use client"
import React, { useEffect, useState } from 'react';
import styles from './writepage.module.css';
import { FileImageOutlined, FolderOpenOutlined, LoadingOutlined, PlusCircleOutlined, PlusOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Space } from 'antd';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';



export default function WritePage() {

    const { data, status } = useSession();

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {
        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }, [file]);

    if (status === "loading") {
        return (
            <LoadingOutlined />
        )
    }

    if (status === "unauthenticated") {
        router.push("/")
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("http://localhost:3000/api/posts", {
            method: 'POST',
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style",
            })
        })

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.setuptitle}>
                <input type="text" placeholder='Title' className={styles.input} onChange={(e) => setTitle(e.target.value)} />
                <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                    <option value="sports">Sports</option>
                    <option value="news">News</option>
                    <option value="arts">Arts</option>
                    <option value="computers">Computers</option>
                    <option value="phone">phone</option>
                </select>
            </div>
            <div className={styles.editor}>
                <div className={styles.buttonmain}>
                    <button className={styles.button} onClick={() => setOpen(!open)}>
                        <PlusOutlined className={styles.add} />
                    </button>
                    {open && (
                        <Space>
                            <input
                                type='file'
                                id='image'
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: 'none' }}
                            />
                            <button className={styles.buttonadd}>
                                <label htmlFor='image'>
                                    <FileImageOutlined className={styles.img} />
                                </label>
                            </button>
                            <button className={styles.buttonadd}>
                                <VerticalAlignTopOutlined className={styles.img} />
                            </button>
                            <button className={styles.buttonadd}>
                                <FolderOpenOutlined className={styles.img} />
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
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    )
}
