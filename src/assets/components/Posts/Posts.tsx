import React from 'react';
import s from './Posts.module.css';
import Post from "./components/Post/Post.tsx";

const Posts = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s.list}>
                {Array.from(Array(9), (_, i) => (
                    <Post key={i} />
                ))}
            </ul>
        </section>
    );
};

export default Posts;