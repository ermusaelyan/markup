import React from 'react';
import s from './Post.module.css';
import {IPost} from "../../../../../models/IPost.ts";
import {usePopup} from "../../../../../hooks/usePopup.tsx";
import {post} from "axios";


interface PostProps {
    data?: IPost;
}

const Post: React.FC<PostProps> = ({ data }) => {
    const { showPopup, Popup } = usePopup();

    return (
        <li className={s.wrapper}>
            <button
                className={s.button}
                onClick={() =>
                    showPopup(
                        <div className={s.modal}>
                            <h1 className={s.modal__title}>{data.title}</h1>
                            <p className={s.modal__desc}>{data.text}</p>
                        </div>
                    )
                }
            >
                <div className={s.image}>
                    <picture className={s.picture}>
                        <source
                            srcSet={`${data.img} 1x, ${data.img_2x} 2x`}
                            type="image/jpg"
                            media="(min-resolution: 288dpi)"
                        />
                        <source
                            srcSet={`${data.img} 1x, ${data.img_2x} 2x`}
                            type="image/jpg"
                            media="(min-resolution: 192dpi)"
                        />
                        {/*<source srcSet={postImageWebP} type="image/webp" />*/}
                        <img src={data.img} alt="post" loading="lazy" />
                    </picture>
                </div>
                <span className={s.status}>{data.tags}</span>
                <h3 className={s.title}>{data.title}</h3>
                <p className={s.info}>
                    <span>{data.autor}</span>
                    <span>{data.date}</span>
                    <span>{data.views} Views</span>
                </p>
                <p className={s.desc}>{data.text}</p>
            </button>
            <Popup />
        </li>
    );
};

export default Post;
