import React from 'react';
import s from './Post.module.css';
import postImageAvif from './../../../../img/posts/post.avif';
import postImageWebP from './../../../../img/posts/post.webp';
import postImagePng from './../../../../img/posts/post.png';

const Post = () => {
    return (
        <li className={s.wrapper}>
            <div className={s.image}>
                <picture className={s.picture}>
                    <source
                        srcSet={`${postImageAvif} 1x, ${postImageAvif} 2x`}
                        type="image/avif"
                        media="(min-resolution: 288dpi)"
                    />
                    <source
                        srcSet={`${postImageAvif} 1x, ${postImageAvif} 2x`}
                        type="image/avif"
                        media="(min-resolution: 192dpi)"
                    />
                    <source
                        srcSet={postImageWebP}
                        type="image/webp"
                    />
                    <img
                        src={postImagePng}
                        alt="post"
                        loading="lazy"
                    />
                </picture>
            </div>
            <span className={s.status}>Lifestyle</span>
            <h3 className={s.title}>Eat Right For Your Exercise Regime</h3>
            <p className={s.info}>
                <span>Niek Bove</span>
                <span>April 8, 2018</span>
                <span>3K Views</span>
            </p>
            <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nemo perferendis ut? Consequuntur cupiditate expedita facere ratione? Aliquid deleniti earum, ex labore laboriosam nesciunt quasi quo reiciendis sint ut veritatis voluptas? Expedita, quia</p>
        </li>
    );
};

export default Post;